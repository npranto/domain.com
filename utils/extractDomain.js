export default function extractDomain(dn = '') {
	if (!dn || dn.length === 0) {
		return { sld: '', tld: '' };
	}
	const [sld, tld] = dn
		.toLowerCase()
		.trim()
		.replace(/\s/g, '')
		.split('.')
		.slice(0, 2);

	return { sld: sld || '', tld: tld || '' };
}
