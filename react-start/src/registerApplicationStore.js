import {createStore} from 'redux';
import shopReducer from './reducers/index.js';

export default function setupStore() {
  return createStore(shopReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}