import { Suspense, useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import ToDo from './ToDo'
import { useSelector } from 'react-redux'

const ToDoDetails = () => {
	const params = useParams()

	// const [todoList, setTodoList] = useState(null)
	const { todo: todoList } = useSelector((state) => state.todo)

	const location = useLocation()
	console.log('location :>> ', location)

	// useEffect(() => {
	// 	const localTodo = localStorage.getItem('todo')
	// 	if (localTodo) setTodoList(JSON.parse(localTodo))
	// }, [])

	return (
		<Suspense>
			<Link to={location.state} className='btn btn-secondary m-2'>
				Back
			</Link>
			{todoList?.map(
				(todo) =>
					todo.id === params.id && <ToDo key={todo.id} todo={todo} />
			)}
		</Suspense>
	)
}

export default ToDoDetails
