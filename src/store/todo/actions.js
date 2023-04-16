import { createAction, nanoid } from '@reduxjs/toolkit'

export const createTodo = createAction('CREATETODO', (value) => {
	return {
		payload: { id: nanoid(), title: value, completed: false },
	}
})
