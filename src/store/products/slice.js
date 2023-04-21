import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { initialState } from './initial'
import {
	createProductsThunk,
	deleteProductsThunk,
	getProductsThunk,
} from './thunk'

const STATUS = {
	PENDING: 'pending',
	FULFILLED: 'fulfilled',
	REJECTED: 'rejected',
}

const arrThunks = [createProductsThunk, deleteProductsThunk, getProductsThunk]

const fn = (type) => arrThunks.map((el) => el[type])

const handlePending = (state) => {
	state.isLoading = true
}

const handleFulfilled = (state) => {
	state.isLoading = false
	state.error = ''
}
const handleFulfilledGet = (state, { payload }) => {
	// handleFulfilled(state)
	state.products = payload
}
const handleFulfilledCreate = (state, { payload }) => {
	state.products.push(payload)
}
const handleFulfilledDel = (state, { payload }) => {
	state.products = state.products.filter((el) => el.id !== payload.id)
}

const handleRejected = (state, { payload }) => {
	state.isLoading = false
	state.error = payload
}

export const productSlice = createSlice({
	name: 'products',
	initialState,
	extraReducers: (builder) => {
		const { PENDING, FULFILLED, REJECTED } = STATUS
		builder
			.addCase(getProductsThunk.fulfilled, handleFulfilledGet)
			.addCase(createProductsThunk.fulfilled, handleFulfilledCreate)
			.addCase(deleteProductsThunk.fulfilled, handleFulfilledDel)
			.addMatcher(isAnyOf(...fn(PENDING)), handlePending)
			.addMatcher(isAnyOf(...fn(FULFILLED)), handleFulfilled)
			.addMatcher(isAnyOf(...fn(REJECTED)), handleRejected)
	},
})

export const productReducer = productSlice.reducer