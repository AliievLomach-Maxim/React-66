import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfile, login } from '../../services/auth-service'

export const loginThunk = createAsyncThunk('auth/login', async (body) => {
	return await login(body)
})

export const getProfileThunk = createAsyncThunk(
	'auth/profile',
	async (_, thunk) => {
		return await getProfile()
	}
)
