import React, {Component} from 'react';
import {connect} from 'react-redux';

import './cart.css';

export class Cart extends Component {
  constructor(props) {
    super(props);
   }

  renderCart() {
    return this.props.inCart.map((i, index) => (
      <div className="cart_list_item" key={index}>
        <p>{i.name}</p>
        <p>Price: {i.price}</p>
        <p> quantity: {i.soud}</p>
        <button onClick={() => this.increaseAmount(i)} disabled={i.available > 0 ? '' : 'disabled'}>+</button>
        <button onClick={() => this.reduceAmount(i)} disabled={i.soud > 0 ? '' : 'disabled'}>-</button>
        <button className="delete-cart-btn" onClick={() => this.removeFromCard(i)}>delete product</button>
      </div>
    ));
  }
  removeFromCard(i) {
    if(i.soud > 0){
    let index = this.props.inCart.indexOf(i);
    this.props.inCart.splice(index, 1);
    i.available++;
    i.soud--;
    }
  }
  increaseAmount(i) {
    if(i.available > 0) {
      i.available--;
      i.soud++;
    }
  }
  reduceAmount(i) {
    if(i.soud > 0) {
      i.available++;
      i.soud--;
    }
  }
  getTotal() {
    let arr = this.props.inCart;
    let total = 0;
    for(let i=0; i< arr.length; i++){
      total += (arr[i].soud*arr[i].price);
    }
    return total;

  }
  render() {
    return (
    <div className="App-cart">
        {this.props.inCart.length ?  this.renderCart() : 'Your cart is empty :('}
      <p>Get Total: {this.getTotal()}</p>
    </div>
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(Cart);
