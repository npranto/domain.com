import { useState } from 'react/cjs/react.development';
import isDomain from '../utils/isDomain';

export default function useCart() {
	const [cart, setCart] = useState([]);

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
