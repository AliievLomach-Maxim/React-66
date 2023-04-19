const BASE_URL = 'https://newsapi.org/v2'
const API_KEY = 'feef20bb6ec8430ab253f1d0367f9ccf'

export const getNews = async (searchText) => {
	const data = await fetch(`${BASE_URL}/everything?q=${searchText}`, {
		headers: {
			'X-Api-Key': API_KEY,
		},
	})
	return await data.json()
}

export const getTopNews = async () => {
	const data = await fetch(`${BASE_URL}/top-headlines?country=us`, {
		headers: {
			'X-Api-Key': API_KEY,
		},
	})
	return await data.json()
}
