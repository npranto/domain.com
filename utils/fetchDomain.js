export default function fetchDomain(domainName) {
	return fetch(
		`https://registration.domain.com/domains/search/${domainName}?suggestions=25&aftermarket=false&registry_premium=false&propertyID=47&searchTerm=${domainName}&tlds=com,net,org,tech,space,online,store,site,website,blog,co,me,live,us,design,ca,biz,host,press,io,club,info&currency=USD`
	)
		.then((res) => res.json())
		.then((data) => {
			const { results = [] } = data || {};
			return results;
		})
		.catch(() => {
			throw new Error('Oops! Try again later!');
		});
}
