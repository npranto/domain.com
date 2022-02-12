export default function ErrorAlert({ message, className = '' }) {
	return (
		<div
			className={`${className} bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded`}
			role="alert"
		>
			<strong className="font-bold">Oops! </strong>
			<span className="block sm:inline"> {message}</span>
		</div>
	);
}
