import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootreducers from './rootReducer'


const store = createStore(rootreducers, composeWithDevTools())

export default store