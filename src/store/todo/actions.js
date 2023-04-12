import { CREATETODO } from './types'

export const createTodo = (todo) => ({ type: CREATETODO, payload: todo })
