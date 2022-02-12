/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import Link from 'next/link';
import {
	DEFAULT_DOMAIN_PRICE,
	DEFAULT_DOMAIN_TERM,
} from '../../constants/constants';
import getSubtotal from '../../utils/getSubtotal';
import isDomain from '../../utils/isDomain';
import styles from './Cart.module.css';

function SliderOverlay({ children }) {
	return (
		<div
			className="fixed inset-0 overflow-hidden z-20"
			aria-labelledby="slide-over-title"
			role="dialog"
			aria-modal="true"
		>
			<div className="absolute inset-0 overflow-hidden">
				<div
					className={`${styles.overlay} absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-500 opacity-100`}
					aria-hidden="true"
				/>

				{children}
			</div>
		</div>
	);
}

function SliderPanel({ children }) {
	return (
		<div className="fixed inset-y-0 right-0 w-full box-border md:max-w-md flex">
			<div
				className={`${styles.panel} w-screen transform transition ease-in-out duration-500 sm:duration-700 translate-x-0`}
			>
				<div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
					{children}
				</div>
			</div>
		</div>
	);
}

function CloseButton({ className = '', onClick }) {
	return (
		<button
			type="button"
			className={`${className} -m-2 p-2 text-gray-400 hover:text-gray-500`}
			onClick={() => onClick()}
		>
			<span className="sr-only">Close panel</span>
			<svg
				className="h-6 w-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	);
}

function CartItem({ product, removeItemFromCart }) {
	const productName = isDomain(product) ? product.domainInfo.domain : 'Addon';
	const productTerm = (product.terms || []).find(
		(t) => t.term === DEFAULT_DOMAIN_TERM
	);
	const productPrice = productTerm?.basePrice || DEFAULT_DOMAIN_PRICE;
	return (
		<li className="py-6 flex">
			<div className="flex-1 flex flex-col">
				<div>
					<div className="flex justify-between text-base font-medium text-gray-900">
						<h3>
							<a href="#/"> {productName} </a>
						</h3>
						<p className="ml-4">${productPrice}</p>
					</div>
				</div>
				<div className="flex-1 flex items-end justify-between text-sm">
					<p className="text-gray-500">Term: {productTerm.term} mo</p>
					<div className="flex">
						<button
							type="button"
							className="font-medium text-indigo-600 hover:text-indigo-500"
							onClick={() => removeItemFromCart(product)}
						>
							Remove
						</button>
					</div>
				</div>
			</div>
		</li>
	);
}

function CartItems({ cart = [], removeItemFromCart }) {
	return (
		<ul role="list" className="-my-6 divide-y divide-gray-200">
			{cart.map((product) => (
				<CartItem
					key={JSON.stringify(product)}
					product={product}
					removeItemFromCart={removeItemFromCart}
				/>
			))}
		</ul>
	);
}

export default function SliderCart({ onCloseCart, cart, removeItemFromCart }) {
	const subtotal = getSubtotal(cart);
	return (
		<SliderOverlay>
			<SliderPanel>
				<div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
					<div className="flex items-start justify-between">
						<h2
							className="text-lg font-medium text-gray-900"
							id="slide-over-title"
						>
							Shopping Cart
						</h2>
						<div className="ml-3 h-7 flex items-center">
							<CloseButton onClick={() => onCloseCart()} />
						</div>
					</div>

					<div className="mt-8">
						<div className="flow-root">
							{cart.length === 0 ? (
								<p className="text-gray-500 italic p-4 text-center">
									Empty cart
								</p>
							) : null}

							<CartItems cart={cart} removeItemFromCart={removeItemFromCart} />
						</div>
					</div>
				</div>

				<div className="border-t border-gray-200 py-6 px-4 sm:px-6">
					<div className="flex justify-between text-base font-medium text-gray-900">
						<p>Subtotal</p>
						<p className="text-lg md:text-xl">${subtotal}</p>
					</div>
					<p className="mt-0.5 text-sm text-gray-500">
						Shipping and taxes calculated at checkout.
					</p>
					{cart.length > 0 ? (
						<div className="mt-6">
							<Link href="/addons">
								<a className="flex justify-center items-center px-3 md:px-6 py-2 md:py-3 border border-transparent rounded-md shadow-sm text-sm md:text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
									Addons
								</a>
							</Link>
						</div>
					) : null}
				</div>
			</SliderPanel>
		</SliderOverlay>
	);
}
