import { useRouter } from 'next/router';
import styles from './Hero.module.css';
import useSearchInput from '../../hooks/useSearchInput';

export default function Hero() {
	const router = useRouter();
	const { searchInput, onSearchInputChange } = useSearchInput('');

	const onSubmit = (e) => {
		e.preventDefault();
		const formattedDomain = searchInput.includes('.')
			? searchInput
			: `${searchInput}.com`;
		router.push(`/registration?domain=${formattedDomain}`);
	};

	return (
		<section className={styles.container}>
			<div className={styles.intro}>
				<h1 className="text-6xl tracking-tight font-black uppercase text-center mb-10 text-white space-y-2">
					<span className="block xl:inline">Do More</span>
					<div className="flex justify-center">
						<span className={`${styles.dot} text-red-600 xl:inline`}>•</span>
						<div className={`${styles.slider} xl:inline text-center`}>
							<div className={`${styles['slider-item']} text-center`}>tech</div>
							<div className={`${styles['slider-item']} text-center`}>
								travel
							</div>
							<div className={`${styles['slider-item']} text-center`}>
								online
							</div>
							<div className={`${styles['slider-item']} text-center`}>fun</div>
							<div className={`${styles['slider-item']} text-center`}>org</div>
						</div>
					</div>
				</h1>

				<form
					className="flex flex-col sm:flex-row md:max-w-screen-sm m-auto"
					onSubmit={onSubmit}
				>
					<div className="search-field flex-grow sm:mr-2">
						<label htmlFor="search-input">
							<input
								type="text"
								className="p-3 text-xl font-light rounded-md bg-white border w-full mb-3"
								name="search"
								id="search-input"
								value={searchInput}
								onChange={onSearchInputChange}
								maxLength={63}
								placeholder="james.com"
							/>
						</label>
					</div>
					<button
						type="submit"
						disabled={searchInput.length === 0}
						className={`flex text-sm justify-center items-center px-10 py-4 uppercase bg-red-500 text-white text-center rounded-md mb-3 transition-colors ${
							searchInput.length === 0
								? 'opacity-90 cursor-not-allowed'
								: 'hover:bg-red-600'
						}`}
					>
						Search
					</button>
				</form>

				<p className="tld-price-info space-x-3 text-center text-sm sm:text-lg text-white">
					<span>
						<span className="font-bold">.COM</span> only $9.99
					</span>
					<span>
						<span className="font-bold">.NET</span> only $12.99
					</span>
					<span>
						<span className="font-bold">.ORG</span> only $8.99
					</span>
				</p>
			</div>
		</section>
	);
}
