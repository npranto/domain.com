import {
	DEFAULT_DOMAIN_PRICE,
	DEFAULT_DOMAIN_TERM,
} from '../constants/constants';

export default function getSubtotal(cart = []) {
	if (!cart || !cart.length) return 0;
	return parseFloat(
		cart.reduce((total, item) => {
			const itemTerm = (item.terms || []).find(
				(t) => t.term === DEFAULT_DOMAIN_TERM
			);
			const itemPrice = itemTerm?.basePrice || DEFAULT_DOMAIN_PRICE;
			return total + parseFloat(itemPrice, 10);
		}, 0)
	).toFixed(2);
}
