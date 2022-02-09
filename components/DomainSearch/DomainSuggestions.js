import DomainSuggestion from './DomainSuggestion';

export default function DomainSuggestions({
	cart,
	suggestionDomains = [],
	addDomainToCart,
	removeDomainFromCart,
}) {
	return (
		<section
			className="domain-suggestions my-4 shadow-md rounded-md"
			id="domain-suggestions"
		>
			<h2 className="font-semibold text-lg py-2 px-2 md:px-8 bg-gray-100">
				HOW ABOUT ONE OF THESE GREAT DOMAINS:
			</h2>
			<ul className="grid grid-cols-1 divide-y py-2 px-2 md:px-8 bg-white">
				{suggestionDomains.map((domain) => (
					<DomainSuggestion
						cart={cart}
						key={JSON.stringify(domain)}
						domain={domain}
						addDomainToCart={addDomainToCart}
						removeDomainFromCart={removeDomainFromCart}
					/>
				))}
			</ul>
		</section>
	);
}
