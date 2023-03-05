import data from '../../data.json'
import { Head } from '../Head/Head'
import { Container, Photo } from './Card.styled'

// import clsx from 'clsx'

// import css from './Card.module.css'

export const Card = ({ isOnline, isOffline }) => {
	return data.map((photo) => {
		return (
			<Container key={photo.id} isHide={isOnline}>
				<Photo src={photo.url} alt={photo.title} />

				<h5>Card title: {photo.title}</h5>
				<div>
					<h5>Card title: {photo.title}</h5>
					<Head id='id-123' clas='card-title'>
						asdasd
						<div>asdasd</div>
						<p>asdsad</p>
					</Head>

					<a href='http'>Go somewhere</a>
				</div>
			</Container>
		)
	})
}
// module
// export const Card = ({ isOnline, isOffline }) => {
// 	return data.map((photo) => {
// 		return (
// 			<div
// 				key={photo.id}
// 				// className={
// 				// 	isOnline
// 				// 		? `${css.main} ${css.red}`
// 				// 		: `${css.main} ${css.blue}`
// 				// }
// 				// className={clsx(
// 				// 	css.main,
// 				// 	isOnline ? css.red : css.blue
// 				// 	// !isOnline && css.blue
// 				// )}
// 				// className={clsx(css.main, {
// 				// 	[css.red]: isOnline,
// 				// 	[css.blue]: isOffline,
// 				// })}
// 			>
// 				<img src={photo.url} alt={photo.title} className={css.photo} />
// 				<div>
// 					<h5>Card title: {photo.title}</h5>
// 					<Head id='id-123' clas='card-title'>
// 						asdasd
// 						<div>asdasd</div>
// 						<p>asdsad</p>
// 					</Head>

// 					<a href='http'>Go somewhere</a>
// 				</div>
// 			</div>
// 		)
// 	})
// }
// ===bootstrap

// export const Card = () => {
// 	return data.map((photo) => {
// 		return (
// 			<div
// 				key={photo.id}
// 				className='card mx-auto my-2'
// 				style={{ width: '18rem' }}
// 			>
// 				<img
// 					src={photo.url}
// 					className='card-img-top'
// 					alt={photo.title}
// 				/>
// 				<div className='card-body'>
// 					<h5 className='card-title'>Card title: {photo.title}</h5>
// 					{/* {Head({ id: 'id-123', clas: 'card-title' })} */}

// 					<Head id='id-123' clas='card-title'>
// 						asdasd
// 						<div>asdasd</div>
// 						<p>asdsad</p>
// 					</Head>

// 					<a href='http' className='btn btn-primary'>
// 						Go somewhere
// 					</a>
// 				</div>
// 			</div>
// 		)
// 	})
// }

const obj = {
	name: 'SomeKey',
}

const user = {
	name: 'Alex',
	'first-name': 'asd',
	[obj.name]: 'asdqwe',
}
