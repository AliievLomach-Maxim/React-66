import { useDispatch, useSelector } from 'react-redux'

import { setStep } from '../../store/counter/counterSlice'

const Step = () => {
	const { step } = useSelector((state) => state.counter)

	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		const { value } = e.target.elements.step
		dispatch(setStep(Number(value)))
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='d-flex mt-2 mx-auto w-25'
			role='search'
		>
			<input
				className='form-control me-2 '
				type='number'
				name='step'
				placeholder='step'
				defaultValue={step}
			/>
			<button className='btn btn-outline-success' type='submit'>
				Set Step
			</button>
		</form>
	)
}

export default Step
