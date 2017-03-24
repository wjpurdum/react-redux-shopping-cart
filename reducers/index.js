import cart from './cart'
import { combineReducers } from 'redux'

//stateless components should be defined as functions.

const rootReducer = combineReducers({
  cart //ES6 short hand for {cart: cart}
})
