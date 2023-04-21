import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import Context from './testContext/Context/Context'
// import App from './testContext/App'

import { persistor, store } from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<Context>
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</Context>
		</Provider>
	</BrowserRouter>
)
