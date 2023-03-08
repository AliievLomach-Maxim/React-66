import { Component } from 'react'
import Header from './Header/Header'
// import Counter from './Counter/Counter'
import ToDoList from './ToDoList/ToDoList'
import Modal from './Modal/Modal'

class App extends Component {
	state = {
		isShowModal: false,
	}

	showModal = () => {
		this.setState({ isShowModal: true })
	}

	closeModal = () => {
		this.setState({ isShowModal: false })
	}

	render() {
		return (
			<div className='container'>
				<Header showModal={this.showModal} />
				{/* <Counter /> */}
				<ToDoList />
				{this.state.isShowModal && (
					<Modal closeModal={this.closeModal}>Some</Modal>
				)}
			</div>
		)
	}
}

export default App
