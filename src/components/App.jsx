import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './Layout/Layout'
import HomePage from './pages/HomePage'
// import NewsPage from './pages/NewsPage'
// import ToDoPage from './pages/ToDoPage'
// import ToDoDetails from './ToDo/ToDoDetails'

const LoginPage = lazy(() => import('./pages/LoginPage'))
const ToDoDetails = lazy(() => import('./ToDo/ToDoDetails'))
const ToDoPage = lazy(() => import('./pages/ToDoPage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='news' element={<NewsPage />} />
				<Route path='todo' element={<ToDoPage />} />
				<Route path='todo/:id' element={<ToDoDetails />} />
			</Route>
			<Route
				path='/login'
				element={
					<Suspense>
						<LoginPage />
					</Suspense>
				}
			/>
		</Routes>
	)
}

export default App
