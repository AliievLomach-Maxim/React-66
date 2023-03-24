import { useCustomContex } from '../Context/Context'

const Alert2 = () => {
	const context = useCustomContex()
	return (
		context.toggleValue && (
			<div className='alert alert-danger'>Messaaaaaggee</div>
		)
	)
}

export default Alert2
