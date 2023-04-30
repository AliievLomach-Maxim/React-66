import React from 'react'
import { signUp } from '../../services/auth-service'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../store/auth/thunk'

const RegistrationPage = () => {
	const dispatch = useDispatch()
	const handleSubmit = (e) => {
		e.preventDefault()
		const newUser = {
			name: e.target.elements.name.value,
			email: e.target.elements.email.value,
			password: e.target.elements.password.value,
			avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=867',
		}
		signUp(newUser)
			.then(() => {
				toast.success('Registration successfully')
				dispatch(
					loginThunk({
						email: e.target.elements.email.value,
						password: e.target.elements.password.value,
					})
				)
				// navigate('/login')
			})
			.catch((error) => console.log(error))
	}

	return (
		<div
			className='card position-absolute top-50 start-50 translate-middle p-2'
			style={{ minWidth: '350px' }}
		>
			<h1 className='text-center'>SignUp</h1>

			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='exampleInputName1' className='form-label'>
						Name
					</label>
					<input
						name='name'
						type='text'
						className='form-control'
						id='exampleInputName1'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className='form-label'>
						Email address
					</label>
					<input
						name='email'
						type='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
					/>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='exampleInputPassword1'
						className='form-label'
					>
						Password
					</label>
					<input
						name='password'
						type='password'
						className='form-control'
						id='exampleInputPassword1'
					/>
				</div>
				<div>
					<Link to='/login'>Login</Link>
				</div>

				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	)
}

export default RegistrationPage
