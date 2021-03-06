import { useEffect, useState } from 'react';
import isDomain from '../utils/isDomain';

export default function useCart(initialValue = []) {
	const [cart, setCart] = useState(initialValue);
	const [isCartOpen, setIsCartOpen] = useState(false);

	useEffect(() => {
		if (cart.length === 0) {
			setIsCartOpen(false);
		}
	}, [cart.length]);

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

	const openCart = () => {
		setIsCartOpen(true);
	};

	const closeCart = () => {
		setIsCartOpen(false);
	};

	return {
		cart,
		addItemToCart,
		removeItemFromCart,
		isCartOpen,
		openCart,
		closeCart,
	};
}
