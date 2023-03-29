import { useEffect, useState } from 'react'
import { getNews } from '../../services/getNews'
import { useCustomContex } from '../../testContext/Context/Context'
import ErrorCard from '../ErrorCard/ErrorCard'

const STATUS = {
	IDLE: 'idle',
	PENDING: 'pending',
	REJECTED: 'rejected',
	RESOLVED: 'resolved',
}

const ContentInfo = ({ searchText }) => {
	const { news, setNews } = useCustomContex()
	// const [news, setNews] = useState(null)
	const [error, setError] = useState('')
	const [status, setStatus] = useState(STATUS.IDLE)

	useEffect(() => {
		news && setStatus(STATUS.RESOLVED)
	}, [news])

	useEffect(() => {
		if (!searchText) return
		setStatus(STATUS.PENDING)
		getNews(searchText)
			.then((response) => response.json())
			.then((data) => {
				if (data.status === 'ok') {
					setNews(data.articles)
					setStatus(STATUS.RESOLVED)
				} else return Promise.reject(data.message)
			})
			.catch((error) => {
				setError(error)
				setStatus(STATUS.REJECTED)
			})
	}, [searchText, setNews])

	if (status === STATUS.PENDING)
		return (
			<div className='spinner-border' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</div>
		)
	else if (status === STATUS.RESOLVED)
		return (
			<ul>
				{news.map((el) => {
					return <li key={el.url}>{el.title}</li>
				})}
				<button>Load more...</button>
			</ul>
		)
	else if (status === STATUS.REJECTED) return <ErrorCard>{error}</ErrorCard>
}

export default ContentInfo

// class ContentInfo extends Component {
// 	state = {
// 		news: null,
// 		error: '',
// 		status: STATUS.IDLE,
// 	}
// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevProps.searchText !== this.props.searchText) {
// 			this.setState({ status: STATUS.PENDING })
// 			getNews(this.props.searchText)
// 				.then((response) => response.json())
// 				.then((data) => {
// 					if (data.status === 'ok')
// 						this.setState({
// 							news: data.articles,
// 							status: STATUS.RESOLVED,
// 						})
// 					else return Promise.reject(data.message)
// 				})
// 				.catch((error) => {
// 					this.setState({ error, status: STATUS.REJECTED })
// 				})
// 			// .finally(() => {
// 			// 	this.setState({ isLoading: false })
// 			// })
// 		}
// 	}
// 	render() {
// 		const { news, error } = this.state
// 		if (this.state.status === STATUS.PENDING)
// 			return (
// 				<div className='spinner-border' role='status'>
// 					<span className='visually-hidden'>Loading...</span>
// 				</div>
// 			)
// 		else if (this.state.status === STATUS.RESOLVED)
// 			return (
// 				<ul>
// 					{news.map((el) => {
// 						return <li key={el.url}>{el.title}</li>
// 					})}
// 					<button>Load more...</button>
// 				</ul>
// 			)
// 		else if (this.state.status === STATUS.REJECTED)
// 			return <ErrorCard>{error}</ErrorCard>
// 	}
// }

// export default ContentInfo
