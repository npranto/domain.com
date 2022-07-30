import { useRouter } from 'next/router';
import { BsSearch } from 'react-icons/bs';
import { useEffect } from 'react';
import useSearchInput from '../../hooks/useSearchInput';

export default function DomainSearchBar({ onSearchDomain }) {
	const router = useRouter();

	const { searchInput, onSearchInputChange, setSearchInput } = useSearchInput(
		router?.query?.domain || ''
	);

	useEffect(
		() => setSearchInput(router?.query?.domain || ''),
		[router.query.domain]
	);

	const onSubmit = (e) => {
		e.preventDefault();
		onSearchDomain(searchInput);
	};

	return (
		<section className="search-bar flex p-3 w-full box-border bg-gray-800">
			<form
				className="search-form w-full max-w-screen-md mx-auto"
				onSubmit={onSubmit}
			>
				<div className="flex items-center space-x-2">
					<input
						type="text"
						className="text-lg font-normal flex-grow p-2 rounded-md"
						placeholder="coffee.com"
						value={searchInput}
						onChange={onSearchInputChange}
					/>
					<button
						type="submit"
						disabled={!searchInput || !searchInput.length}
						className={
							!searchInput || !searchInput.length
								? 'opacity-50 cursor-not-allowed'
								: ''
						}
					>
						<BsSearch size="1.5em" className="text-white" />
					</button>
				</div>
			</form>
		</section>
	);
}
