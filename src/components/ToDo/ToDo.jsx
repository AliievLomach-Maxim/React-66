import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ToDo = ({ todo, handleCheckCompleted, handleDelete }) => {
	const location = useLocation()
	return (
		<li className='list-group-item'>
			<div className='row justify-content-between'>
				<div className='col-10'>
					{handleCheckCompleted && (
						<input
							className='form-check-input me-2'
							type='checkbox'
							checked={todo.completed}
							onChange={() => handleCheckCompleted(todo.id)}
						/>
					)}
					{handleCheckCompleted ? (
						<Link to={todo.id} state={location}>
							{todo.title}
						</Link>
					) : (
						<h2> {todo.title}</h2>
					)}
				</div>
				<div className='col'>
					{handleDelete && (
						<button
							disabled={!todo.completed}
							type='button'
							className='btn-close'
							aria-label='Close'
							onClick={() => handleDelete(todo.id)}
						></button>
					)}
				</div>
			</div>
		</li>
	)
}

export default ToDo
