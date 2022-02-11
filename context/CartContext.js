import { createContext, useMemo } from 'react';
import useCart from '../hooks/useCart';

export const CartContext = createContext();

export function CartProvider({ children }) {
	const {
		cart,
		addItemToCart,
		removeItemFromCart,
		isCartOpen,
		openCart,
		closeCart,
	} = useCart([]);

	const cartProps = useMemo(
		() => ({
			cart,
			addItemToCart,
			removeItemFromCart,
			isCartOpen,
			openCart,
			closeCart,
		}),
		[cart.length]
	);

	return (
		<CartContext.Provider value={cartProps}>{children}</CartContext.Provider>
	);
}
