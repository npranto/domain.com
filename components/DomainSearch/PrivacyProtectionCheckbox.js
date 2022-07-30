import { useEffect, useState } from 'react';

export default function PrivacyProtectionCheckbox({
	term = 12,
	onRemovePrivacyProtection,
	onAddPrivacyProtection,
	privacy,
}) {
	const [isPrivacyIncluded, setIsPrivacyIncluded] = useState(true);

	useEffect(() => {
		if (isPrivacyIncluded) {
			console.log('privacy is enabled, calling onAddPrivacyProtection()');
			onAddPrivacyProtection(privacy);
		} else {
			console.log('privacy is disabled, calling onRemovePrivacyProtection()');
			onRemovePrivacyProtection(privacy);
		}
	}, [isPrivacyIncluded]);

	const privacyTerm = (privacy.terms || []).find((t) => t.term === term);
	const privacyPrice = privacyTerm?.basePrice;

	return (
		<div className="privacy-protection-checkbox flex items-start px-2 md:px-0 my-2">
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
					to each domain for ${privacyPrice} per year.{' '}
					<a href="#/" className="font-semibold text-blue-500">
						What&apos;s this?
					</a>
				</label>
			</div>
		</div>
	);
}
