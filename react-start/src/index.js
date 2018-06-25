// Core dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import applicationStore from './registerApplicationStore';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { getAllProducts } from './actions/products.action'


const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())


ReactDOM.render(
  <Provider store={store}  >
    <App />
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
