import { useCustomContex } from './Context/Context'
const Main = () => {
	const context = useCustomContex()

	return (
		<div>
			<h1>Hello Context</h1>
			<button
				onClick={() => context.toggle(!context.toggleValue)}
				className='btn btn-success'
			>
				Open Alert
			</button>
		</div>
	)
}

export default Main
