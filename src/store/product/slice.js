import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import {
	createProductsThunk,
	deleteProductsThunk,
	getProductsThunk,
} from './thunk'
import { initialState } from './initial'

const defaultStatus = {
	pending: 'pending',
	fulfilled: 'fulfilled',
	rejected: 'rejected',
}

const customArr = [getProductsThunk, createProductsThunk, deleteProductsThunk]

const fn = (status) => customArr.map((el) => el[status])

const handlePending = (state) => {
	state.status = defaultStatus.pending
}

const handleFulfilled = (state) => {
	state.status = defaultStatus.fulfilled
	state.error = ''
}
const handleFulfilledGet = (state, { payload }) => {
	state.products = payload
}
const handleFulfilledDelete = (state, { payload }) => {
	state.products = state.products.filter((el) => el.id !== payload.id)
}
const handleFulfilledCreate = (state, { payload }) => {
	state.products.push(payload)
}
const handleRejected = (state, { payload }) => {
	state.status = defaultStatus.rejected
	state.error = payload
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getProductsThunk.fulfilled, handleFulfilledGet)
			.addCase(deleteProductsThunk.fulfilled, handleFulfilledDelete)
			.addCase(createProductsThunk.fulfilled, handleFulfilledCreate)
			.addMatcher(
				isAnyOf(...fn(defaultStatus.fulfilled)),
				handleFulfilled
			)
			.addMatcher(isAnyOf(...fn(defaultStatus.pending)), handlePending)
			.addMatcher(isAnyOf(...fn(defaultStatus.rejected)), handleRejected)
	},
})

export const productReducer = productsSlice.reducer
