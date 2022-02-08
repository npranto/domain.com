import { useEffect, useState } from 'react';

export default function PrivacyProtectionCheckbox({
	onRemovePrivacyProtection = () => {},
	onAddPrivacyProtection = () => {},
	privacy = {},
}) {
	const [isPrivacyIncluded, setIsPrivacyIncluded] = useState(true);

	useEffect(() => {
		if (isPrivacyIncluded) {
			console.log('privacy is enabled, calling onAddPrivacyProtection()');
			onAddPrivacyProtection();
		} else {
			console.log('privacy is disabled, calling onRemovePrivacyProtection()');
			onRemovePrivacyProtection();
		}
	}, [isPrivacyIncluded]);

	return (
		<div className="add-privacy-protection flex items-start my-4">
			<div className="flex items-center h-5">
				<input
					type="checkbox"
					name="privacy"
					id="privacy-protection-checkbox"
					checked={isPrivacyIncluded}
					onChange={() => setIsPrivacyIncluded((ps) => !ps)}
					className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
				/>
			</div>
			<div className="ml-3 text-sm">
				<label
					htmlFor="privacy-protection-checkbox"
					className="font-medium text-gray-700"
				>
					<span className="font-semibold">Add Domain Privacy + Protection</span>{' '}
					to each domain for $8.99 per year.{' '}
					<a href="#/" className="font-semibold text-blue-500">
						What&apos;s this?
					</a>
				</label>
			</div>
		</div>
	);
}
