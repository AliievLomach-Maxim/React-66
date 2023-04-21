import { combineReducers } from 'redux'

import { counterReducer } from './counter/counterSlice'

import { todoReducer } from './todo/todoReducer'
import { newsReducer } from './news/newsReducer'
import { productReducer } from './products/slice'
import { productsApi } from './products/productsAPI'

export const reducer = combineReducers({
	counter: counterReducer,
	todo: todoReducer,
	news: newsReducer,
	products: productReducer,
	[productsApi.reducerPath]: productsApi.reducer,
})
