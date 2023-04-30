import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './Layout/Layout'
import RegistrationPage from './pages/RegistrationPage'
import { useSelector } from 'react-redux'

const LoginPage = lazy(() => import('./pages/LoginPage'))
const ToDoDetails = lazy(() => import('./ToDo/ToDoDetails'))
const HomePage = lazy(() => import('./pages/HomePage'))
const ToDoPage = lazy(() => import('./pages/ToDoPage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))

const App = () => {
	const isAuth = useSelector((state) => state.auth.access_token)
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='news' element={<NewsPage />} />

				<Route path='todo' element={<ToDoPage />} />
				<Route path='todo/:id' element={<ToDoDetails />} />
				<Route path='products' element={<ProductsPage />} />
			</Route>
			<Route
				path='/login'
				element={
					<Suspense>
						<LoginPage />
					</Suspense>
				}
			/>
			<Route
				path='/signUp'
				element={
					<Suspense>
						<RegistrationPage />
					</Suspense>
				}
			/>
		</Routes>
	)
}

export default App
