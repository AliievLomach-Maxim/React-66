import Alert from './Alert'
import Context from './Context/Context'
import Main from './Main'

const App = () => {
	return (
		<Context>
			<div className='container pt-2'>
				<Alert />
				<Main />
			</div>
		</Context>
	)
}

export default App
