import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://api.escuelajs.co/api/v1',
})

const setToken = (token) => {
	instance.defaults.headers.common['Authorization'] = token
}

export const dellToken = () => {
	delete instance.defaults.headers.common['Authorization']
}

export const signUp = async (body) => {
	return await instance.post('/users', body)
}

export const login = async (body) => {
	const { data } = await instance.post('/auth/login', body)
	setToken(`Bearer ${data.access_token}`)
	return data
}

export const getProfile = async () => {
	const { data } = await instance('/auth/profile')
	return data
}
