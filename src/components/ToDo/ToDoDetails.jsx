import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ToDo from './ToDo'

const ToDoDetails = () => {
	const params = useParams()
	console.log('params :>> ', params)
	const [todoList, setTodoList] = useState(null)

	useEffect(() => {
		const localTodo = localStorage.getItem('todo')
		if (localTodo) setTodoList(JSON.parse(localTodo))
	}, [])

	return (
		<>
			{todoList?.map(
				(todo) =>
					todo.id === params.id && <ToDo key={todo.id} todo={todo} />
			)}
		</>
	)
}

export default ToDoDetails
