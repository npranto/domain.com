import { useEffect } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { FaRegTimesCircle, FaTimesCircle } from 'react-icons/fa';

export default function SearchedDomainStatus({
	cart = [],
	searchedDomain,
	addDomainToCart,
	removeDomainFromCart,
}) {
	const domainName = searchedDomain.domainInfo.domain;
	const isDomainAvailable = searchedDomain.domainInfo.availability;
	const isSearchedDomainInCart = true;

	useEffect(() => {
		if (isDomainAvailable) {
			addDomainToCart(searchedDomain);
		}
	}, []);

	return (
		<section className="searched-domain-status flex flex-col shadow-md  rounded-md my-4">
			<div className="flex flex-col md:flex-row space-y-4 md:space-x-4 items-center p-2 md:p-8 bg-white">
				<div className="domain-available-status">
					{isDomainAvailable ? (
						<BsFillCheckCircleFill className="text-green-600 text-4xl md:text-7xl" />
					) : (
						<FaTimesCircle className="text-red-700 text-4xl md:text-7xl" />
					)}
				</div>
				<div className="domain-status-info flex-grow">
					<h2 className="font-semibold text-md md:text-lg text-center md:text-left">
						{isDomainAvailable
							? 'CONGRATS, YOUR DOMAIN IS AVAILABLE!'
							: 'SORRY, THIS DOMAIN IS TAKEN'}
					</h2>
					<h3 className="font-thin text-gray-400 text-lg md:text-3xl text-center md:text-left">
						{domainName}
					</h3>
				</div>
				<div className="domain-cta flex justify-center flex-shrink-0">
					{isSearchedDomainInCart ? (
						<button
							type="button"
							className="flex space-x-2 items-center px-4 py-2"
							onClick={removeDomainFromCart}
						>
							<span className="text-lg font-medium text-green-600">
								Added To Cart
							</span>
							<span>
								<FaRegTimesCircle />
							</span>
						</button>
					) : (
						<button
							type="button"
							className="flex items-center bg-green-600 px-4 py-2 rounded-md"
							onClick={addDomainToCart}
						>
							<span className="text-lg font-medium text-white">
								Add To Cart
							</span>
						</button>
					)}
				</div>
			</div>

			<div className="domain-status-suggestion py-2 px-2 md:px-8 bg-gray-100">
				<p className="text-xs">
					But wait! Check out this collection of{' '}
					<a href="#domain-suggestions" className="font-semibold text-blue-500">
						related domains
					</a>{' '}
					you may like, or refine your search and try again.
				</p>
				{/* <p className="text-xs">
					Make sure to register{' '}
					<a href="#domain-suggestions" className="font-bold text-blue-500">
						alternative TLDs
					</a>{' '}
					to protect your brand. Check out the list below, picked just for you.
				</p> */}
			</div>
		</section>
	);
}
