import { Component, useState } from 'react'
// import { nanoid } from 'nanoid'
import { Toaster } from 'react-hot-toast'

import Header from './Header/Header'
import TestUseMemo from './TestUseMemo/TestUseMemo'
// import ToDoList from './ToDoList/ToDoList'
// import Modal from './Modal/Modal'
// import FormLogin from './FormLogin/FormLogin'
// import Search from './Search/Search'
// import ContentInfo from './ContentInfo/ContentInfo'
// import Counter from './Counter/Counter'

const App = () => {
	const [isShowModal, setIsShowModal] = useState(false)
	// const [searchText, setSearchText] = useState('')

	const showModal = () => setIsShowModal(true)

	// const closeModal = () => setIsShowModal(false)

	// function createUser(data) {
	// 	const newUser = {
	// 		...data,
	// 		id: nanoid(),
	// 	}
	// 	console.log('newUser :>> ', newUser)
	// }

	// const handleSearch = (searchText) => {
	// 	setSearchText(searchText)
	// }

	return (
		<div className='container'>
			<Toaster
				position='top-right'
				toastOptions={{
					duration: 1500,
				}}
			/>
			<Header showModal={showModal} />
			{/* <Search handleSearch={handleSearch} />
			<ContentInfo searchText={searchText} />
			<ToDoList />
			{isShowModal && (
				<Modal closeModal={closeModal}>
					<FormLogin
						closeModal={closeModal}
						createUser={createUser}
					/>
				</Modal>
			)} */}
			{/* <Counter /> */}
			<TestUseMemo />
		</div>
	)
}

export default App

// class App extends Component {
// 	state = {
// 		isShowModal: false,
// 		searchText: '',
// 	}

// 	showModal = () => {
// 		this.setState({ isShowModal: true })
// 	}

// 	closeModal = () => {
// 		this.setState({ isShowModal: false })
// 	}

// 	createUser = (data) => {
// 		const newUser = {
// 			...data,
// 			id: nanoid(),
// 		}
// 		console.log('newUser :>> ', newUser)
// 	}

// 	handleSearch = (searchText) => {
// 		this.setState({ searchText })
// 	}

// 	render() {
// 		return (
// 			<div className='container'>
// 				<Header showModal={this.showModal} />
// 				<Search handleSearch={this.handleSearch} />
// 				<ContentInfo searchText={this.state.searchText} />
// 				{/* <ToDoList /> */}
// 				{/* {this.state.isShowModal && (
// 					<Modal closeModal={this.closeModal}>
// 						<FormLogin
// 							closeModal={this.closeModal}
// 							createUser={this.createUser}
// 						/>
// 					</Modal>
// 				)} */}
// 				{/* <Counter /> */}
// 			</div>
// 		)
// 	}
// }

// export default App
