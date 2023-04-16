import { configureStore } from '@reduxjs/toolkit'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { reducer } from './reducer'

const persistConfig = {
	key: 'todoS',
	storage,
	blacklist: ['counter'],
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({ reducer: persistedReducer })

export const persistor = persistStore(store)
