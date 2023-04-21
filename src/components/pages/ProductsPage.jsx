import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	deleteProductsThunk,
	getProductsThunk,
} from '../../store/products/thunk'
import { productsSelector } from '../../store/products/selectors'
import {
	useDeleteProductsMutation,
	useGetProductsQuery,
} from '../../store/products/productsAPI'

// const STATUS = {
// 	IDLE: 'idle',
// 	PENDING: 'pending',
// 	REJECTED: 'rejected',
// 	FULFILLED: 'fulfilled',
// }

const ProductsPage = () => {
	const { isLoading, data: products, isError } = useGetProductsQuery()
	const [deleteProduct, delInfo] = useDeleteProductsMutation()
	// const products = useSelector(productsSelector)
	// const { products, error, isLoading } = useSelector(
	// 	(state) => state.products
	// )

	// const [val, setVal] = useState(0)

	// const dispatch = useDispatch()

	// // const sortedProducts =
	// // 	products && [...products].sort((a, b) => a.price - b.price)

	// useEffect(() => {
	// 	dispatch(getProductsThunk())
	// }, [dispatch])

	return (
		<>
			{delInfo.isLoading && <h1>Deleting...</h1>}
			{isLoading && (
				<div className='spinner-border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			)}
			{products && (
				<div className='container text-center'>
					<div className='row'>
						{products.map(
							({ id, title, description, images, price }) => (
								<div className='col' key={id}>
									<div
										className='card'
										style={{ width: '18rem' }}
									>
										<img
											src={images[0]}
											className='card-img-top'
											alt={title}
										/>
										<div className='card-body'>
											<h5 className='card-title'>
												{title}
											</h5>
											<p className='card-text'>
												{price} $
											</p>
											<p className='card-text'>
												{description}
											</p>
											<button
												className='btn btn-danger'
												onClick={() =>
													deleteProduct(id)
												}
											>
												Delete
											</button>
										</div>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			)}

			{isError && <h2>error</h2>}
		</>
	)
}

export default ProductsPage

// const ProductsPage = () => {
// 	const { products, error, status } = useSelector((state) => state.products)

// 	const dispatch = useDispatch()

// 	useEffect(() => {
// 		dispatch(getProductsThunk())
// 	}, [dispatch])

// 	if (status === STATUS.PENDING)
// 		return (
// 			<div className='spinner-border' role='status'>
// 				<span className='visually-hidden'>Loading...</span>
// 			</div>
// 		)
// 	else if (status === STATUS.FULFILLED)
// 		return (
// 			<div className='container text-center'>
// 				<div className='row'>
// 					{products.map(
// 						({ id, title, description, images, price }) => (
// 							<div className='col' key={id}>
// 								<div
// 									className='card'
// 									style={{ width: '18rem' }}
// 								>
// 									<img
// 										src={images[0]}
// 										className='card-img-top'
// 										alt={title}
// 									/>
// 									<div className='card-body'>
// 										<h5 className='card-title'>{title}</h5>
// 										<p className='card-text'>{price} $</p>
// 										<p className='card-text'>
// 											{description}
// 										</p>
// 										<button
// 											className='btn btn-danger'
// 											onClick={() =>
// 												dispatch(
// 													deleteProductsThunk(id)
// 												)
// 											}
// 										>
// 											Delete
// 										</button>
// 									</div>
// 								</div>
// 							</div>
// 						)
// 					)}
// 				</div>
// 			</div>
// 		)
// 	else if (status === STATUS.REJECTED) return <h2>{error}</h2>
// }

// export default ProductsPage
