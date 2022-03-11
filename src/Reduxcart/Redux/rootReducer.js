import { combineReducers } from 'redux'
import { shoppingreducers } from './shopping/shoppingreducers'


const rootreducers = combineReducers({
    shop: shoppingreducers
})


export default rootreducers