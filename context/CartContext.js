import { createContext, useMemo, useState } from 'react';
// import useCart from '../hooks/useCart';
import isDomain from '../utils/isDomain';

export const CartContext = createContext();

export function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	const addItemToCart = (item) => {
		console.log('addItemToCart()', { item });
		setCart((prevCart) => [...prevCart, item]);
	};

	const removeItemFromCart = (item) => {
		console.log('removeItemFromCart()', { item });

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

	const cartProps = useMemo(
		() => ({ cart, addItemToCart, removeItemFromCart, setCart }),
		[cart.length]
	);

	return (
		<CartContext.Provider value={cartProps}>{children}</CartContext.Provider>
	);
}
