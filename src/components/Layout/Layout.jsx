import { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import { nanoid } from 'nanoid'

import Header from '../Header/Header'
import Modal from '../Modal/Modal'
import FormLogin from '../FormLogin/FormLogin'

const Layout = () => {
	const [isShowModal, setIsShowModal] = useState(false)

	const showModal = () => setIsShowModal(true)

	const closeModal = () => setIsShowModal(false)

	function createUser(data) {
		const newUser = {
			...data,
			id: nanoid(),
		}
		console.log('newUser :>> ', newUser)
	}

	return (
		<div className='container'>
			
			<Header showModal={showModal} />

			<Suspense fallback={<h1>Loading...</h1>}>
				<Outlet />
			</Suspense>
			{isShowModal && (
				<Modal closeModal={closeModal}>
					<FormLogin
						closeModal={closeModal}
						createUser={createUser}
					/>
				</Modal>
			)}
		</div>
	)
}

export default Layout
