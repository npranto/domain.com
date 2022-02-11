import Image from 'next/image';
import { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../../context/CartContext';

export default function Navbar() {
	const { cart } = useContext(CartContext);
	return (
		<nav className="p-2 md:px-4 bg-white flex items-center">
			<div className="flex items-center flex-grow">
				<Image
					src="/assets/images/logo.svg"
					width={160}
					height={42}
					alt="Logo"
				/>
			</div>

			{/* <a href="#/" role="button" className="relative flex">
				<AiOutlineShoppingCart size="1.75em" />
				{cart.length === 0 ? null : (
					<span className="absolute -right-2 -top-2 rounded-full bg-red-600 w-6 h-6 top right p-0 m-0 text-white font-mono text-xs leading-tight text-center flex justify-center items-center">
						{cart.length}
					</span>
				)}
			</a> */}
		</nav>
	);
}
