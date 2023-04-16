import { createSlice } from '@reduxjs/toolkit'
import { counterInitialState } from './initialState'

export const counterSlice = createSlice({
	name: 'counter',
	initialState: counterInitialState,
	reducers: {
		increment: (state, action) => {
			state.total += action.payload
		},
		decrement: (state, action) => {
			state.total -= action.payload
		},
		setStep: (state, action) => {
			state.step = action.payload
		},
	},
})

export const counterReducer = counterSlice.reducer

export const { increment, decrement, setStep } = counterSlice.actions
