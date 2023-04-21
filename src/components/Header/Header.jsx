import { useDispatch } from 'react-redux'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { getNewsThunk } from '../../store/news/thunk'

const Header = ({ showModal }) => {
	const navigate = useNavigate()
	const handleLogin = () => {
		2 + 2 ? navigate('/login') : navigate('/')
	}
	const dispatch = useDispatch()

	return (
		<nav className='navbar bg-dark mb-3 navbar-expand-lg'>
			<div className='container-fluid'>
				<span className='navbar-brand mb-0 h1 text-success'>
					Navbar
				</span>
				<div
					className='collapse navbar-collapse'
					id='navbarNavAltMarkup'
				>
					<div className='navbar-nav'>
						<NavLink
							className='nav-link text-white '
							aria-current='page'
							to='/'
						>
							Home
						</NavLink>
						<NavLink className='nav-link text-white' to='/news'>
							News
						</NavLink>
						<NavLink className='nav-link text-white' to='/todo'>
							Todo
						</NavLink>
						<NavLink className='nav-link text-white' to='/products'>
							Products
						</NavLink>
					</div>
				</div>
				<button className='btn btn-outline-success' onClick={showModal}>
					Open Modal
				</button>

				<button
					className='btn btn-outline-success'
					onClick={handleLogin}
				>
					Login
				</button>
				<button
					className='btn btn-outline-success'
					onClick={() => {
						dispatch(getNewsThunk())
					}}
				>
					thunk
				</button>
			</div>
		</nav>
	)
}

export default Header
