import React, {Component} from 'react';

import SideBar from './components/sidebar';
import Cart from './containers/cart/CartContainer';
import ProductList from './containers/product-list/ProductContainer';
import Header from './components/Header';
import {store} from './index'


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <Router>
            <div className="App">
              <div className="App-wrapper">
              <Header />
            </div>
              <SideBar store= {store} />
              <Route exact path="/" component={ProductList} />
              <Route path="/cart" component={Cart} />
            </div>
          </Router>
      </div>
    );
  }
}