import React, { Component } from 'react'

import ToDo from '../ToDo/ToDo'
import FormToDo from '../FormToDo/FormToDo'

import todo from '../../todo.json'
import { nanoid } from 'nanoid'

class ToDoList extends Component {
	state = {
		todoList: '',
		isDelete: false,
		isCreate: false,
	}

	componentDidMount() {
		// localStorage.setItem('todo', JSON.stringify(todo))
		if (localStorage.getItem('todo'))
			this.setState({
				todoList: JSON.parse(localStorage.getItem('todo')),
			})
	}

	componentDidUpdate(_, prevState) {
		if (prevState.todoList.length > this.state.todoList.length) {
			localStorage.setItem('todo', JSON.stringify(this.state.todoList))
			this.setState({
				isDelete: true,
				// todo: localStorage.getItem('todo'),
			})
			setTimeout(() => {
				this.setState({ isDelete: false })
			}, 1500)
		}
		if (prevState.todoList.length < this.state.todoList.length) {
			localStorage.setItem('todo', JSON.stringify(this.state.todoList))
			this.setState({
				isCreate: true,
				// todo: localStorage.getItem('todo'),
			})
			setTimeout(() => {
				this.setState({ isCreate: false })
			}, 1500)
		}
	}

	handleCheckCompleted = (id) => {
		this.setState((prevState) => ({
			todoList: prevState.todoList.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			),
		}))
	}

	handleDelete = (id) => {
		this.setState((prev) => ({
			todoList: prev.todoList.filter((todo) => todo.id !== id),
		}))
	}

	addToDo = (value) => {
		this.setState((prev) => {
			return {
				todoList: [
					...prev.todoList,
					{
						id: nanoid(),
						title: value,
						completed: false,
					},
				],
			}
		})
	}

	render() {
		return (
			<>
				<h1>My To-Do list</h1>
				{this.state.isDelete && (
					<div className='alert alert-danger' role='alert'>
						To-do delete successfully!
					</div>
				)}
				{this.state.isCreate && (
					<div className='alert alert-success' role='alert'>
						Create to-do successfully!
					</div>
				)}
				<FormToDo addToDo={this.addToDo} />
				{this.state.todoList && (
					<ul className='list-group list-group-flush'>
						{this.state.todoList.map((todo) => (
							<ToDo
								key={todo.id}
								todo={todo}
								handleCheckCompleted={this.handleCheckCompleted}
								handleDelete={this.handleDelete}
							/>
						))}
					</ul>
				)}
			</>
		)
	}
}

export default ToDoList
