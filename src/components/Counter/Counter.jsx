import { Component } from 'react'

class Counter extends Component {
	state = {
		value: 0,
	}

	handleClickIncrement = () =>
		this.setState((prevState) => ({ value: prevState.value + 1 }))

	handleClickDecrement = () =>
		this.setState((prevState) => ({ value: prevState.value - 1 }))

	render() {
		const { value } = this.state
		return (
			<div className='position-absolute top-50 start-50 translate-middle'>
				<div
					className='card bg-dark text-white '
					style={{ width: '600px' }}
				>
					<div className='card-body'>
						<h5 className='card-title text-center fs-1'>Counter</h5>
						<p
							className='card-text  text-center'
							style={{ fontSize: '80px' }}
						>
							{value}
						</p>
						<div className='d-flex justify-content-center px-5'>
							<button
								className='btn btn-outline-success me-5'
								onClick={this.handleClickIncrement}
							>
								<i className='bi bi-plus-circle fs-1'></i>
							</button>
							<button
								className='btn  btn-outline-danger ms-5'
								onClick={this.handleClickDecrement}
							>
								<i className='bi bi-dash-circle fs-1'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Counter

// const Counter = () => {
// 	return (
// 		<div className='position-absolute top-50 start-50 translate-middle'>
// 			<div
// 				className='card bg-dark text-white '
// 				style={{ width: '600px' }}
// 			>
// 				<div className='card-body'>
// 					<h5 className='card-title text-center fs-1'>Counter</h5>
// 					<p
// 						className='card-text  text-center'
// 						style={{ fontSize: '80px' }}
// 					>
// 						0
// 					</p>
// 					<div className='d-flex justify-content-center px-5'>
// 						<button
// 							className='btn btn-outline-success me-5'
// 							// onClick={handleClick}
// 						>
// 							<i className='bi bi-plus-circle fs-1'></i>
// 						</button>
// 						<button
// 							className='btn  btn-outline-danger ms-5'
// 							// onClick={handleClick}
// 						>
// 							<i className='bi bi-dash-circle fs-1'></i>
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
