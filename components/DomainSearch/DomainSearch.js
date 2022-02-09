import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import DomainSuggestions from './DomainSuggestions';
import DomainSearchBar from './DomainSearchBar';
import SearchedDomainStatus from './SearchedDomainStatus';
import PrivacyProtectionCheckbox from './PrivacyProtectionCheckbox';
import extractDomain from '../../utils/extractDomain';
import { DEFAULT_TLD } from '../../constants/constants';
import fetchDomain from '../../utils/fetchDomain';
import ErrorAlert from '../ErrorAlert';
import validateDomain from '../../utils/validateDomain';
import StartDomainSearch from './StartDomainSearch';

const IDLE = 'IDLE';
const SEARCH_PENDING = 'SEARCH_PENDING';
const SEARCH_COMPLETE = 'SEARCH_COMPLETE';

export default function DomainSearch() {
	const router = useRouter();
	// eslint-disable-next-line no-unused-vars
	const [status, setStatus] = useState(IDLE);
	const [fetchedDomains, setFetchedDomains] = useState([]);
	const [error, setError] = useState(null);
	const [searchedDomainName, setSearchedDomainName] = useState('');

	useEffect(() => {
		setError(null);
		const queryDomain = router?.query?.domain || '';
		const { sld = '', tld = DEFAULT_TLD } = extractDomain(queryDomain);
		const { isValid, error: message } = validateDomain(sld, tld);
		const formattedDomain = `${sld}.${tld}`;
		// setSearchInput(formattedDomain);
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
		const { sld = '', tld = DEFAULT_TLD } = extractDomain(domainName);
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
	};

	const removeDomainFromCart = (domain) => {
		console.log('remove domain from cart', domain);
	};

	const removePrivacyFromCart = () => {
		console.log('remove all privacy from cart');
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

	const searchedDomain = getSearchedDomain();
	const suggestionDomains = getSuggestionDomains();

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
							searchedDomain={searchedDomain}
							addDomainToCart={addDomainToCart}
							removeDomainFromCart={removeDomainFromCart}
						/>
						<PrivacyProtectionCheckbox
							onRemovePrivacyProtection={removePrivacyFromCart}
							onAddPrivacyProtection={() => {}}
							privacy={{}}
						/>
						<DomainSuggestions />
					</>
				) : null}
			</article>
		</>
	);
}
