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

const useSessionStorage = (key, defaultValue) => {
	if (!key || typeof key !== 'string') {
		throw new Error('Please provide a `key` to useSessionStorage hook');
	}

	const [value, setValue] = useState(
		() => getItemFromSessionStorage(key) || defaultValue
	);

	useEffect(() => {
		saveItemToSessionStorage(key, value);
	}, [key, value]);

	return [value, setValue];
};

export default useSessionStorage;
