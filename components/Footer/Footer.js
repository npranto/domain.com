import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillInstagram,
	AiFillLinkedin,
	AiFillYoutube,
} from 'react-icons/ai';
import { BsSpotify } from 'react-icons/bs';

import styles from './Footer.module.css';

export default function Footer() {
	return (
		<footer
			className={`${styles.container} bg-gray-800 px-4 py-6 text-zinc-400 flex flex-col items-center md:flex-row space-y-3 md:space-y-0`}
		>
			<ul
				className={`${styles.socials} md:order-2 flex space-x-3 flex-shrink basis-0`}
			>
				<li className="social-item">
					<a
						href="https://www.facebook.com/Domaindotcom/"
						className="hover:text-zinc-200"
					>
						<AiFillFacebook size="1.75em" />
					</a>
				</li>
				<li className="social-item">
					<a
						href="https://twitter.com/domaindotcom"
						className="hover:text-zinc-200"
					>
						<AiFillTwitterSquare size="1.75em" />
					</a>
				</li>
				<li className="social-item">
					<a
						href="https://www.instagram.com/domaindotcom/"
						className="hover:text-zinc-200"
					>
						<AiFillInstagram size="1.75em" />
					</a>
				</li>
				<li className="social-item">
					<a
						href="https://www.linkedin.com/company/domaindotcom/"
						className="hover:text-zinc-200"
					>
						<AiFillLinkedin size="1.75em" />
					</a>
				</li>
				<li className="social-item">
					<a
						href="https://www.youtube.com/channel/UCn7-1xgGV6AfaqcSBLYdGyw"
						className="hover:text-zinc-200"
					>
						<AiFillYoutube size="1.75em" />
					</a>
				</li>
				<li className="social-item">
					<a
						href="https://open.spotify.com/user/w51o7xrhasfl2zur0ql1zvks7?si=13bcebdb475b40a0&nd=1"
						className="hover:text-zinc-200"
					>
						<BsSpotify size="1.75em" />
					</a>
				</li>
			</ul>

			<p
				className={`${styles.copyright} md:order-1 flex-grow flex-shrink basis-0 text-center md:text-left text-sm`}
			>
				© Copyright {new Date().getFullYear()} Domain.com, LLC. All rights
				reserved.
			</p>
		</footer>
	);
}
