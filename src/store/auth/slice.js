import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { getProfileThunk, loginThunk } from './thunk'

const initialState = {
	access_token: '',
	isLoading: false,
	error: '',
	profile: null,
}

const handlePending = (state, { payload }) => {
	state.isLoading = true
}
const handleFulfilled = (state, { payload }) => {
	state.isLoading = false
	state.error = ''
	state.access_token = payload.access_token
}
const handleRejected = (state, { payload }) => {
	state.isLoading = false
	state.error = payload
}

const handleFulfilledProfile = (state, { payload }) => {
	state.isLoading = false
	state.error = ''
	state.profile = payload
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logOut(state) {
			state.profile = null
			state.access_token = ''
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginThunk.fulfilled, handleFulfilled)
			.addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
			.addMatcher(
				isAnyOf(loginThunk.pending, getProfileThunk.pending),
				handlePending
			)

			.addMatcher(
				isAnyOf(loginThunk.rejected, getProfileThunk.rejected),
				handleRejected
			)
	},
})

export const authReducer = authSlice.reducer
export const { logOut } = authSlice.actions
