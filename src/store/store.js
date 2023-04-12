import { createStore } from 'redux'

import { reducer } from './reducer'

export const store = createStore(reducer)

// console.log('store :>> ', store)

// store.dispatch({ type: 'increment', payload: 1 })
// console.log(store.getState())
