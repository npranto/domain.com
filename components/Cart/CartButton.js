import { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../../context/CartContext';

export default function CartButton({ className = '' }) {
	const { cart, openCart } = useContext(CartContext);
	return (
		<button type="button" className={`${className}`} onClick={() => openCart()}>
			<AiOutlineShoppingCart size="1.75em" />
			{cart.length > 0 ? (
				<span className="absolute -right-2 -top-2 rounded-full bg-red-600 w-6 h-6 top right p-0 m-0 text-white font-mono text-xs leading-tight text-center flex justify-center items-center">
					{cart.length}
				</span>
			) : null}
		</button>
	);
}
