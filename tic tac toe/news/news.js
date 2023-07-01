const url = 'https://reddio-nft-token-and-ipfs.p.rapidapi.com/v1/assetid';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f10da6d1bmsh684805b33cdd894p1a9207jsn2ae129523f05',
		'X-RapidAPI-Host': 'reddio-nft-token-and-ipfs.p.rapidapi.com'
	}
};
const news=async()=>{
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}