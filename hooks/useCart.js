import { useState, useEffect } from 'react';
import hasWindow from '../utils/hasWindow';
import isDomain from '../utils/isDomain';

const getCartFromLocalStorage = () => {
	if (!hasWindow()) return null;
	const item = JSON.parse(localStorage.getItem('cart'));
	console.log({ item });
	return item;
};

const saveCartToLocalStorage = (cart) => {
	if (!hasWindow()) return;
	localStorage.setItem('cart', JSON.stringify(cart));
};

const removeCartFromLocalStorage = () => {
	if (!hasWindow()) return;
	localStorage.removeItem('cart');
};

export default function useCart() {
	const [cart, setCart] = useState(getCartFromLocalStorage() || []);

	console.log('Inside cart context...', { cart });

	useEffect(() => {
		saveCartToLocalStorage(cart);
	}, [JSON.stringify(cart)]);

	const addItemToCart = (item) => {
		setCart((prevCart) => [...prevCart, item]);
	};

	const removeItemFromCart = (item) => {
		const cartWithItemRemoved = cart.filter((i) => {
			if (isDomain(item) && !isDomain(i)) return true;
			if (!isDomain(item) && isDomain(i)) return true;
			if (isDomain(item) && isDomain(i)) {
				return item?.domainInfo?.domain !== i?.domainInfo?.domain;
			}
			return item.type !== i.type || item.level !== i.level;
		});
		setCart(cartWithItemRemoved);
	};

	return {
		cart,
		addItemToCart,
		removeItemFromCart,
		setCart,
	};
}
