import { BiSearchAlt } from 'react-icons/bi';

export default function StartDomainSearch() {
	return (
		<section className="start-domain-search py-12 px-10 flex-grow flex flex-col justify-center items-center text-center">
			<BiSearchAlt size="10em" className="hidden md:block py-4" />
			<h1 className="max-w-screen-sm text-3xl md:text-5xl font-bold text-gray-400">
				IT ALL STARTS WITH A GREAT DOMAIN
			</h1>
			<p className="max-w-screen-sm text-base my-4">
				Use the search bar above to get started
			</p>
		</section>
	);
}
