import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
	const isAuth = useSelector((state) => state.auth.access_token)
	const location = useLocation()
	return isAuth ? children : <Navigate to='/login' state={location} />
}

export default PrivateRoute
