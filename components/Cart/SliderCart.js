/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import Link from 'next/link';
import { useEffect } from 'react/cjs/react.development';
import {
	DEFAULT_DOMAIN_PRICE,
	DEFAULT_DOMAIN_TERM,
} from '../../constants/constants';
import getSubtotal from '../../utils/getSubtotal';
import isDomain from '../../utils/isDomain';
import styles from './Cart.module.css';

export default function SliderCart({
	onHideCart,
	cart = [],
	removeItemFromCart,
}) {
	const subtotal = getSubtotal(cart);

	return (
		<div
			className="fixed inset-0 overflow-hidden"
			aria-labelledby="slide-over-title"
			role="dialog"
			aria-modal="true"
		>
			<div className="absolute inset-0 overflow-hidden">
				{/* <!--
      Background overlay, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
				<div
					className={`${styles.overlay} absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-500 opacity-100`}
					aria-hidden="true"
				/>

				<div className="fixed inset-y-0 right-0 w-full box-border md:max-w-md flex">
					{/* <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      --> */}
					<div
						className={`${styles.panel} w-screen transform transition ease-in-out duration-500 sm:duration-700 translate-x-0`}
					>
						<div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
							<div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
								<div className="flex items-start justify-between">
									<h2
										className="text-lg font-medium text-gray-900"
										id="slide-over-title"
									>
										Shopping Cart
									</h2>
									<div className="ml-3 h-7 flex items-center">
										<button
											type="button"
											className="-m-2 p-2 text-gray-400 hover:text-gray-500"
											onClick={() => onHideCart()}
										>
											<span className="sr-only">Close panel</span>
											{/* <!-- Heroicon name: outline/x --> */}
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
									</div>
								</div>

								<div className="mt-8">
									<div className="flow-root">
										{cart.length === 0 ? (
											<p className="text-gray-500 italic p-4 text-center">
												Empty cart
											</p>
										) : null}

										<ul role="list" className="-my-6 divide-y divide-gray-200">
											{cart.map((item) => {
												const productName = isDomain(item)
													? item.domainInfo.domain
													: 'Addon';
												const productTerm = (item.terms || []).find(
													(t) => t.term === DEFAULT_DOMAIN_TERM
												);
												const productPrice =
													productTerm?.basePrice || DEFAULT_DOMAIN_PRICE;

												console.log({ productPrice });

												return (
													<li className="py-6 flex" key={JSON.stringify(item)}>
														<div className="flex-1 flex flex-col">
															<div>
																<div className="flex justify-between text-base font-medium text-gray-900">
																	<h3>
																		<a href="#/"> {productName} </a>
																	</h3>
																	<p className="ml-4">${productPrice}</p>
																</div>
																{/* <p className="mt-1 text-sm text-gray-500">
																	{isDomain(item) ? 'Domain' : 'Addon'}
																</p> */}
															</div>
															<div className="flex-1 flex items-end justify-between text-sm">
																<p className="text-gray-500">
																	Term: {productTerm.term} mo
																</p>

																<div className="flex">
																	<button
																		type="button"
																		className="font-medium text-indigo-600 hover:text-indigo-500"
																		onClick={() => removeItemFromCart(item)}
																	>
																		Remove
																	</button>
																</div>
															</div>
														</div>
													</li>
												);
											})}

											{/* <!-- More products... --> */}
										</ul>
									</div>
								</div>
							</div>

							<div className="border-t border-gray-200 py-6 px-4 sm:px-6">
								<div className="flex justify-between text-base font-medium text-gray-900 font-semibold">
									<p>Subtotal</p>
									<p className="text-lg md:text-xl">${subtotal}</p>
								</div>
								<p className="mt-0.5 text-sm text-gray-500">
									Shipping and taxes calculated at checkout.
								</p>
								<div className="mt-6">
									<Link href="/addons">
										<a className="flex justify-center items-center px-3 md:px-6 py-2 md:py-3 border border-transparent rounded-md shadow-sm text-sm md:text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
