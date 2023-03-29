// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
// import { nanoid } from 'nanoid'
// import { Toaster } from 'react-hot-toast'

// import Header from './Header/Header'
// import TestUseMemo from './TestUseMemo/TestUseMemo'

import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import ToDoPage from './pages/ToDoPage'
import ToDoDetails from './ToDo/ToDoDetails'
// import ToDoList from './ToDoList/ToDoList'
// import Modal from './Modal/Modal'
// import FormLogin from './FormLogin/FormLogin'
// import Search from './Search/Search'
// import ContentInfo from './ContentInfo/ContentInfo'
// import Counter from './Counter/Counter'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='news' element={<NewsPage />} />
				<Route path='todo' element={<ToDoPage />} />
				<Route path='todo/:id/:title' element={<ToDoDetails />} />
			</Route>
		</Routes>
	)
}

export default App
