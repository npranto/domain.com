import { useState } from 'react';

export default function useSearchInput(initialInput = '') {
	const [searchInput, setSearchInput] = useState(initialInput);
	const onChange = (e) => {
		const { target: { value } = {} } = e || {};
		setSearchInput(value.toLowerCase());
		/* 
      TODO: add a domain validator based on follow rule set:
        - domain name should be a-z or A-Z or 0-9 and hyphen (-).
        - domain name should be between 1 and 63 characters long.
        - domain name should not start or end with a hyphen(-) (e.g. -geeksforgeeks.org or geeksforgeeks.org-).
        - last TLD (Top level domain) must be at least two characters and a maximum of 6 characters.
        - domain name can be a subdomain (e.g. contribute.geeksforgeeks.org)
      TODO: add a debounce to domain validator, so the validation only
      occurs once every second at max
    */
	};

	return {
		searchInput,
		onChange,
	};
}
