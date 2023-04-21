const BASE_URL = 'https://api.escuelajs.co/api/v1'

export const getProducts = async () => {
	const data = await fetch(`${BASE_URL}/products`)
	return await data.json()
}

export const createProducts = async (data) => {
	const res = await fetch(`${BASE_URL}/products`, {
		body: JSON.stringify(data),
	})
	return await res.json()
}

export const deleteProducts = async (id) => {
	const res = await fetch(`${BASE_URL}/products/${id}`)
	return await res.json()
}
