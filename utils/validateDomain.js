import { DEFAULT_DOMAIN_TLD, VALID_DOMAIN_TLDS } from '../constants/constants';

export default function validateDomain(sld = '', tld = DEFAULT_DOMAIN_TLD) {
	if (!sld || !sld.length) {
		return {
			isValid: false,
			error: 'Please enter a valid domain name',
		};
	}

	if (sld.length < 3) {
		return {
			isValid: false,
			error: 'Domain must be at least 3 characters long',
		};
	}

	if (!VALID_DOMAIN_TLDS.includes(tld.toLowerCase())) {
		return {
			isValid: false,
			error: `Please pass is a valid TLD. Valid TLDs include: ${VALID_DOMAIN_TLDS.join(
				', '
			)}`,
		};
	}

	return {
		isValid: true,
		error: null,
	};
}
