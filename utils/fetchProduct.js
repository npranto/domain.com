export default function fetchProduct({ type = null, level = null }) {
	if (
		!type ||
		typeof type !== 'string' ||
		!level ||
		typeof level !== 'string'
	) {
		throw new Error(
			'Please provide a valid `type` and `level` as identifier to fetch product'
		);
	}

	return fetch(
		`https://registration.domain.com/product/${type}/${level}/add?propertyID=47`
	)
		.then((res) => res.json())
		.then((data) => data)
		.catch(() => {
			throw new Error('Oops! No product found');
		});
}
