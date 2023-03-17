const BASE_URL = 'https://newsapi.org/v2'
const API_KEY = 'feef20bb6ec8430ab253f1d0367f9ccf'

export const getNews = (searchText) => {
	return fetch(`${BASE_URL}/everything?q=${searchText}`, {
		headers: {
			'X-Api-Key': API_KEY,
		},
	})
}
