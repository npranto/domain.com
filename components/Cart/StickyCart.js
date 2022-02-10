/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import getSubtotal from '../../utils/getSubtotal';

export default function StickyCart({ cart = [], onShowCart }) {
	const subtotal = getSubtotal(cart);

	return (
		<div className="fixed bottom-0 left-0 right-0 shadow-2xl bg-slate-100 p-2 md:py-3 md:px-6 flex justify-between items-center space-x-4">
			<div className="flex justify-between text-base font-medium text-gray-900 space-x-4">
				<p>Subtotal</p>
				<p className="font-bold">${subtotal}</p>
			</div>
			{/* <p className="mt-0.5 text-sm text-gray-500">
				Shipping and taxes calculated at checkout.
			</p> */}
			<div className="actions flex items-center space-x-4">
				<button
					type="button"
					className="relative flex"
					onClick={() => onShowCart()}
				>
					<AiOutlineShoppingCart size="1.75em" />
					{cart.length === 0 ? null : (
						<span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
							{cart.length}
						</span>
					)}
				</button>

				<Link href="/addons">
					<a className="flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900">
						Addons
					</a>
				</Link>
			</div>
			{/* <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
				<p>
					or{' '}
					<button
						type="button"
						className="text-indigo-600 font-medium hover:text-indigo-500"
					>
						Continue Shopping<span aria-hidden="true"> &rarr;</span>
					</button>
				</p>
			</div> */}
		</div>
	);
}
