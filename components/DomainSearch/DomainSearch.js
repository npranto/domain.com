import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Loading from './Loading';
import DomainSuggestions from './DomainSuggestions';
import DomainSearchBar from './DomainSearchBar';
import SearchedDomainStatus from './SearchedDomainStatus';
import PrivacyProtectionCheckbox from './PrivacyProtectionCheckbox';
import extractDomain from '../../utils/extractDomain';
import {
	DEFAULT_PRIVACY_PRODUCT,
	DEFAULT_DOMAIN_TLD,
} from '../../constants/constants';
import fetchDomain from '../../utils/fetchDomain';
import ErrorAlert from '../ErrorAlert';
import validateDomain from '../../utils/validateDomain';
import StartDomainSearch from './StartDomainSearch';
import fetchProduct from '../../utils/fetchProduct';
import { CartContext } from '../../context/CartContext';
import SliderCart from '../Cart/SliderCart';
import StickyCart from '../Cart/StickyCart';

const IDLE = 'IDLE';
const SEARCH_PENDING = 'SEARCH_PENDING';
const SEARCH_COMPLETE = 'SEARCH_COMPLETE';

export default function DomainSearch() {
	const router = useRouter();
	// eslint-disable-next-line no-unused-vars
	const [status, setStatus] = useState(IDLE);
	const [fetchedDomains, setFetchedDomains] = useState([]);
	const [fetchedPrivacy, setFetchedPrivacy] = useState(null);
	const [error, setError] = useState(null);
	const [searchedDomainName, setSearchedDomainName] = useState('');
	const [showCart, setShowCart] = useState(false);

	const { cart, addItemToCart, removeItemFromCart } = useContext(CartContext);

	useEffect(() => {
		const TYPE = '2092';
		const LEVEL = 'dir_base01_';

		fetchProduct({ type: TYPE, level: LEVEL })
			.then((product) => {
				if (product?.type === TYPE && product?.level === LEVEL) {
					setFetchedPrivacy(product);
				} else {
					setFetchedPrivacy(DEFAULT_PRIVACY_PRODUCT);
				}
			})
			.catch(() => setFetchedPrivacy(DEFAULT_PRIVACY_PRODUCT));
	}, []);

	useEffect(() => {
		setError(null);
		const queryDomain = router?.query?.domain || '';
		if (!queryDomain || !queryDomain.length) return;
		const { sld = '', tld = DEFAULT_DOMAIN_TLD } = extractDomain(queryDomain);
		const { isValid, error: message } = validateDomain(sld, tld);
		const formattedDomain = `${sld}.${tld}`;
		setSearchedDomainName(formattedDomain);
		if (!isValid) {
			setError(message);
		} else {
			setStatus(SEARCH_PENDING);
			setTimeout(() => {
				fetchDomain(formattedDomain)
					.then((domains) => setFetchedDomains(domains))
					.catch((e) => setError(e.message))
					.finally(() => setStatus(SEARCH_COMPLETE));
			}, 500);
		}
	}, [router?.query?.domain]);

	const onSearchDomain = (domainName) => {
		setError(null);
		if (!domainName || !domainName.length) return;
		const { sld = '', tld = DEFAULT_DOMAIN_TLD } = extractDomain(domainName);
		const { isValid, error: message } = validateDomain(sld, tld);
		if (!isValid) {
			setError(message);
		} else {
			const formattedDomain = `${sld}.${tld}`;
			setSearchedDomainName(formattedDomain);
			setStatus(SEARCH_PENDING);
			setTimeout(() => {
				fetchDomain(formattedDomain)
					.then((domains) => setFetchedDomains(domains))
					.catch((e) => setError(e.message))
					.finally(() => setStatus(SEARCH_COMPLETE));
			}, 500);
		}
	};

	const addDomainToCart = (domain) => {
		console.log('add domain to cart', domain);
		addItemToCart(domain);
	};

	const removeDomainFromCart = (domain) => {
		console.log('remove domain from cart', domain);
		removeItemFromCart(domain);
	};

	const removePrivacyFromCart = (p) => {
		console.log('remove all privacy from cart');
		removeItemFromCart(p);
	};

	const onShowCart = () => {
		setShowCart(true);
	};

	const onHideCart = () => {
		setShowCart(false);
	};

	const getSearchedDomain = () => {
		const { sld = '', tld = '' } = extractDomain(searchedDomainName);
		return fetchedDomains.find(
			(domain) =>
				domain?.domainInfo?.domain?.toLowerCase() ===
				`${sld}.${tld}`.toLowerCase()
		);
	};

	const getSuggestionDomains = () => {
		const { sld = '', tld = '' } = extractDomain(searchedDomainName);
		return fetchedDomains.filter(
			(domain) =>
				domain?.domainInfo?.domain?.toLowerCase() !==
				`${sld}.${tld}`.toLowerCase()
		);
	};

	const filterDomainsByAvailability = (domains = []) =>
		domains.filter((domain) => domain?.domainInfo?.availability);

	const searchedDomain = getSearchedDomain();
	const suggestionDomains = filterDomainsByAvailability(getSuggestionDomains());

	console.log({
		query: router.query,
		fetchedDomains,
		searchedDomain,
		suggestionDomains,
	});

	return (
		<>
			<DomainSearchBar onSearchDomain={onSearchDomain} />

			<article className="overflow auto flex flex-col flex-grow w-full max-w-screen-md mx-auto">
				{error ? <ErrorAlert className="my-4" message={error} /> : null}

				{status === IDLE ? <StartDomainSearch /> : null}

				{status === SEARCH_PENDING ? <Loading /> : null}

				{status === SEARCH_COMPLETE ? (
					<>
						<SearchedDomainStatus
							cart={cart}
							searchedDomain={searchedDomain}
							addDomainToCart={addDomainToCart}
							removeDomainFromCart={removeDomainFromCart}
						/>
						<PrivacyProtectionCheckbox
							onRemovePrivacyProtection={removePrivacyFromCart}
							onAddPrivacyProtection={() => {}}
							privacy={fetchedPrivacy}
						/>
						<DomainSuggestions
							cart={cart}
							suggestionDomains={suggestionDomains}
							addDomainToCart={addDomainToCart}
							removeDomainFromCart={removeDomainFromCart}
						/>

						{cart.length > 0 ? (
							<StickyCart onShowCart={onShowCart} cart={cart} />
						) : null}
						{showCart ? (
							<SliderCart
								onHideCart={onHideCart}
								cart={cart}
								removeItemFromCart={removeItemFromCart}
							/>
						) : null}

						<pre>{JSON.stringify({ cart }, null, 2)}</pre>
					</>
				) : null}
			</article>
		</>
	);
}
