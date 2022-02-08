import { FaTimes } from 'react-icons/fa';
import styles from './CookieNotice.module.css';

export default function CookieNotice({ onClose }) {
	return (
		<div
			className={`${styles.container} bg-white px-6 py-4 fixed bottom-3 left-3 rounded-md w-full max-w-xl shadow-sm`}
		>
			<button
				type="button"
				className="absolute top-4 right-4"
				onClick={() => onClose()}
			>
				<FaTimes />
			</button>
			<h2 className="text-lg font-semibold mb-3">About Cookies</h2>
			<p className="text-sm mb-2">
				We use cookies to ensure that we give you the best experience on our
				website. This includes cookies from third party social media websites
				and advertising cookies that may analyze your use of this site. Click
				&quot;Got it&quot; to agree or &quot;Cookie Settings&quot; to opt out.
				<br />
				<a
					href="https://newfold.com/privacy-center/cookie-policy"
					className="underline text-blue-600 hover:bg-blue-600"
				>
					Cookie Notice
				</a>
			</p>
			<button
				type="button"
				className="px-6 py-3 text-center bg-blue-500 hover:bg-blue-600 text-white mb-2 transition-colors"
				onClick={() => onClose()}
			>
				Got It
			</button>
			<button
				type="button"
				className="px-6 py-3 text-center underline text-blue-600"
				onClick={() => onClose()}
			>
				Cookie Settings
			</button>
		</div>
	);
}
