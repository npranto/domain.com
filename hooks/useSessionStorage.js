import { useState, useEffect } from 'react';
import hasWindow from '../utils/hasWindow';

const getItemFromSessionStorage = (key) => {
	if (!hasWindow()) return null;
	const value = sessionStorage.getItem(key);
	try {
		return JSON.parse(value);
	} catch (e) {
		return null;
	}
};

const saveItemToSessionStorage = (key, value) => {
	if (!hasWindow()) return;
	sessionStorage.setItem(key, JSON.stringify(value));
};

const useSessionStorage = (key, initialValue) => {
	if (!key || typeof key !== 'string' || typeof initialValue === 'undefined') {
		throw new Error(
			'Please provide both `key` and `initialValue` to useSessionStorage hook'
		);
	}

	const [value, setValue] = useState(
		() => getItemFromSessionStorage(key) || initialValue
	);

	useEffect(() => {
		saveItemToSessionStorage(key, value);
	}, [key, value]);

	return [value, setValue];
};

export default useSessionStorage;
