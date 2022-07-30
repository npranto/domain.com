import { FaRegTimesCircle } from 'react-icons/fa';
import {
	DEFAULT_DOMAIN_PRICE,
	DEFAULT_DOMAIN_TERM,
} from '../../constants/constants';

export default function DomainSuggestion({
	cart = [],
	term = DEFAULT_DOMAIN_TERM,
	domain,
	addDomainToCart,
	removeDomainFromCart,
}) {
	const domainName = domain?.domainInfo?.domain;
	const domainTerm = (domain.terms || []).find((t) => t.term === term);
	const domainPrice = domainTerm?.basePrice || DEFAULT_DOMAIN_PRICE;
	const isDomainInCart = cart.some(
		(item) => item?.domainInfo?.domain === domainName
	);

	return (
		<li className="flex justify-between items-center space-x-4 py-4">
			<h3 className="text-xs sm:text-sm md:text-xl font-normal flex-grow">
				{domainName}
			</h3>
			<p className="font-semibold flex-shrink-0">${domainPrice}</p>
			{isDomainInCart ? (
				<button
					type="button"
					className="flex space-x-2 items-center flex-shrink-0"
					onClick={() => removeDomainFromCart(domain)}
				>
					<span className="text-sm font-medium text-green-600">
						Added <span className="hidden sm:inline">To Cart</span>
					</span>
					<span>
						<FaRegTimesCircle />
					</span>
				</button>
			) : (
				<button
					type="button"
					className="flex items-center bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 rounded-md flex-shrink-0"
					onClick={() => addDomainToCart(domain)}
				>
					<span className="text-sm font-medium text-white">
						Add <span className="hidden sm:inline"> To Cart</span>
					</span>
				</button>
			)}
		</li>
	);
}
