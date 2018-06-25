import { combineReducers } from 'redux';
import { reducer as api } from 'redux-json-api';
import inCart from './cart';
import products from './products'

export default combineReducers({
  api,
  inCart,
  products
})