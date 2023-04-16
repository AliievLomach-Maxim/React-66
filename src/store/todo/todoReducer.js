import { createReducer } from '@reduxjs/toolkit'
import { createTodo } from './actions'
import { todoInitialState } from './initialState'

// export const todoReducer = (state = todoInitialState.todo, action) => {
// 	switch (action.type) {
// 		case CREATETODO:
// 			return {
// 				...state,
// 				todo: [...state.todo, { ...action.payload }],
// 			}
// 		default:
// 			return state
// 	}
// }

export const todoReducer = createReducer(todoInitialState, {
	// [createTodo]: (state, action) => ({
	// 	...state,
	// 	todo: [...state.todo, { ...action.payload }],
	// }),
	[createTodo]: (state, action) => {
		state.todo.push(action.payload)
	},
})
