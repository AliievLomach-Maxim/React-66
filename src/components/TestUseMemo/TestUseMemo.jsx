import React, { useCallback, useEffect, useMemo, useState } from 'react'

function complexCompute(number) {
	for (let i = 0; i < 1000000000; i++) {}
	return number * 2
}

const TestUseMemo = () => {
	const [total, setTotal] = useState(10)
	const [colored, setColored] = useState(false)

	const styled = useMemo(() => {
		return { color: colored ? 'red' : 'white' }
	}, [colored])

	// const computed = complexCompute(total)

	const computed = useMemo(() => {
		console.log('useMemo :>> ')
		return complexCompute(total)
	}, [total])

	useEffect(() => {
		console.log('change styled')
	}, [styled])

	return (
		<div className='card bg-dark text-white mx-auto w-100 mt-2'>
			<div className='card-body'>
				<h5 className='card-title text-center fs-1' style={styled}>
					Test useMemo
				</h5>
				<p
					className='card-text  text-center'
					style={{ fontSize: '80px' }}
				>
					{computed}
				</p>
				<div className='d-flex justify-content-center px-5'>
					<button
						className='btn btn-outline-success me-5'
						onClick={() => setTotal((prev) => prev + 1)}
					>
						<i className='bi bi-plus-circle fs-1'></i>
					</button>
					<button
						className='btn  btn-outline-danger mx-5'
						onClick={() => setTotal((prev) => prev - 1)}
					>
						<i className='bi bi-dash-circle fs-1'></i>
					</button>
					<button
						className='btn  btn-outline-warning ms-5'
						onClick={() => setColored((prev) => !prev)}
					>
						<i className='bi bi-dash-circle fs-1'></i>
					</button>
				</div>
			</div>
		</div>
	)
}

export default TestUseMemo
