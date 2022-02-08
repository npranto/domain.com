/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import styles from '../styles/Registration.module.css';
import DomainSearch from '../components/DomainSearch/DomainSearch';

export default function Registration() {
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
				<DomainSearch />
			</main>

			<Footer />
		</div>
	);
}
