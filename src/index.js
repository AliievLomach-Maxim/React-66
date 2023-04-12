import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import Context from './testContext/Context/Context'
// import App from './testContext/App'

import { store } from './store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<Context>
				<App />
			</Context>
		</Provider>
	</BrowserRouter>
)
