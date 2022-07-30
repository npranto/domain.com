/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import getSubtotal from '../../utils/getSubtotal';
import CartButton from './CartButton';

export default function StickyCart({ cart }) {
	const subtotal = getSubtotal(cart);
	return (
		<div className="fixed z-10 bottom-0 left-0 right-0 shadow-2xl bg-slate-100 p-2 md:py-3 md:px-6 flex justify-between items-center space-x-4">
			<div className="flex justify-between text-base font-medium text-gray-900 space-x-4">
				<p>Subtotal</p>
				<p className="font-bold">${subtotal}</p>
			</div>
			<div className="actions flex items-center space-x-4">
				<CartButton className="relative flex" />
				<Link href="/addons">
					<a className="flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900">
						Addons
					</a>
				</Link>
			</div>
		</div>
	);
}
