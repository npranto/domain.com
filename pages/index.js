import Head from 'next/head';
import CookieNotice from '../components/CookieNotice/CookieNotice';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Nav from '../components/Nav/Nav';
import styles from '../styles/Home.module.css';
import { COOKIE_NOTICE_ACCEPTED } from '../constants/constants';
import useSessionStorage from '../hooks/useSessionStorage';

export default function Home() {
	const [cookieNoticeAccepted, setCookieNoticeAccepted] = useSessionStorage(
		COOKIE_NOTICE_ACCEPTED,
		false
	);

	const onHideCookieNotice = () => {
		setCookieNoticeAccepted(true);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>
					Website Domain Names, Online Stores &amp; Hosting - Domain.com
				</title>
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
				<Hero />
			</main>

			{!cookieNoticeAccepted ? (
				<CookieNotice onClose={onHideCookieNotice} />
			) : null}

			<Footer />
		</div>
	);
}
