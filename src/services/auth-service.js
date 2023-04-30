import axios from 'axios'

const publicInstance = axios.create({
	baseURL: 'https://api.escuelajs.co/api/v1',
})

const privateInstance = axios.create({
	baseURL: 'https://api.escuelajs.co/api/v1',
})
const setToken = (token) => {
	privateInstance.defaults.headers.common['Authorization'] = token
}

export const dellToken = () => {
	delete privateInstance.defaults.headers.common['Authorization']
}

export const signUp = async (body) => {
	return await publicInstance.post('/users', body)
}

export const login = async (body) => {
	const { data } = await publicInstance.post('/auth/login', body)
	setToken(`Bearer ${data.access_token}`)
	return data
}

export const getProfile = async () => {
	const { data } = await privateInstance('/auth/profile')
	return data
}
