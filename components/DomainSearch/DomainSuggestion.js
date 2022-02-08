export default function DomainSuggestion({
	domain = {},
	addDomainToCart = () => {},
	removeDomainFromCart = () => {},
}) {
	return (
		<li className="flex justify-between items-center space-x-4 py-4">
			<h3 className="text-lg md:text-xl font-normal flex-grow">
				hsdgfhsdhfgdhgjfsds.net
			</h3>
			<p className="font-semibold flex-shrink-0">$12.99</p>
			{/* <button type="button" className="flex space-x-2 items-center">
				<span className="text-sm font-medium text-green-600">
					Added To Cart
				</span>
				<span>
					<FaRegTimesCircle />
				</span>
			</button> */}
			<button
				type="button"
				className="flex items-center bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 rounded-md"
			>
				<span className="text-sm font-medium text-white">Add To Cart</span>
			</button>
		</li>
	);
}
