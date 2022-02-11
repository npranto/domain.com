import { createContext, useMemo } from 'react';
import useCart from '../hooks/useCart';

export const CartContext = createContext();

export function CartProvider({ children }) {
	const { cart, addItemToCart, removeItemFromCart, setCart } = useCart();

	const cartProps = useMemo(
		() => ({ cart, addItemToCart, removeItemFromCart, setCart }),
		[JSON.stringify(cart)]
	);

	return (
		<CartContext.Provider value={cartProps}>{children}</CartContext.Provider>
	);
}
