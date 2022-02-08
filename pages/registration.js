import { useRouter } from 'next/router';
import { BsFillCheckCircleFill, BsSearch } from 'react-icons/bs';
import { FaRegTimesCircle } from 'react-icons/fa';
import Head from 'next/head';
import { useState } from 'react';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import styles from '../styles/Registration.module.css';
import useSearchInput from '../hooks/useSearchInput';
import Loading from '../components/Loading';

export default function Registration() {
	const router = useRouter();
	// eslint-disable-next-line no-unused-vars
	const [isSearching, setIsSearching] = useState(false);
	const { searchInput, onChange } = useSearchInput(router?.query?.domain || '');

	return (
		<div className={styles.container}>
			<Head>
				<title>Domain.com - Registration - Domain.com</title>
				<meta
					name="description"
					content="Finding the perfect website domain is as easy as 1-2-3. Buy a domain name, build and host a website, and enjoy our professional online marketing tools."
				/>
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#b91d47" />
				<meta name="theme-color" content="#ffffff" />
			</Head>

			<Nav />

			<main className={styles.main}>
				<section className="search-bar flex p-3 w-full box-border bg-gray-800">
					<form className="search-form w-full max-w-screen-md mx-auto">
						<div className="flex items-center space-x-2">
							<input
								type="text"
								className="text-lg font-normal flex-grow p-2 rounded-md"
								placeholder="coffee.com"
								value={searchInput}
								onChange={onChange}
							/>
							<button type="submit">
								<BsSearch size="1.5em" className="text-white" />
							</button>
						</div>
					</form>
				</section>

				<article className="flex flex-col flex-grow w-full max-w-screen-md mx-auto">
					{isSearching ? (
						<section className="loading-status flex-grow flex flex-col justify-center items-center">
							<Loading />
						</section>
					) : (
						<>
							<section className="domain-search-result flex flex-col shadow-md rounded my-4">
								<div className="flex flex-col md:flex-row space-y-4 md:space-x-4 items-center p-2 md:p-8 bg-white">
									<div className="domain-available-status">
										<BsFillCheckCircleFill className="text-green-600 text-4xl md:text-7xl" />
										{/* <FaTimesCircle className="text-red-700 text-4xl md:text-7xl" /> */}
									</div>
									<div className="domain-status-info flex-grow">
										<h2 className="font-semibold text-md md:text-xl text-center md:text-left">
											CONGRATS, YOUR DOMAIN IS AVAILABLE!
											{/* SORRY, THIS DOMAIN IS TAKEN */}
										</h2>
										<h3 className="font-extralight text-lg  md:text-3xl text-center md:text-left">
											dfhsdhfgghjdsfds.com
										</h3>
									</div>
									<div className="domain-cta flex justify-center flex-shrink-0">
										<button
											type="button"
											className="flex space-x-2 items-center px-4 py-2"
										>
											<span className="text-lg md:text-xl font-medium text-green-600">
												Added To Cart
											</span>
											<span>
												<FaRegTimesCircle />
											</span>
										</button>
										{/* <button
										type="button"
										className="flex items-center bg-green-600 px-4 py-2 rounded-md"
									>
										<span className="text-lg md:text-xl font-medium text-white">
											Add To Cart
										</span>
									</button> */}
									</div>
								</div>

								<div className="domain-status-suggestion py-2 px-2 md:px-8 bg-gray-200">
									<p className="text-xs">
										But wait! Check out this collection of{' '}
										<a href="#/" className="font-semibold text-blue-500">
											related domains
										</a>{' '}
										you may like, or refine your search and try again.
									</p>
									{/* <p className="text-base">
										Make sure to register{' '}
										<a href="#/" className="font-bold text-blue-500">
											alternative TLDs
										</a>{' '}
										to protect your brand. Check out the list below, picked just
										for you.
									</p> */}
								</div>
							</section>

							{/* <section className="domain-search-listing"></section> */}
						</>
					)}
				</article>
			</main>

			<Footer />
		</div>
	);
}
