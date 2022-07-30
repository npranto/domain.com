import Image from 'next/image';

export default function Logo() {
	return (
		<div className="flex items-center flex-grow">
			<Image src="/assets/images/logo.svg" width={160} height={42} alt="Logo" />
		</div>
	);
}
