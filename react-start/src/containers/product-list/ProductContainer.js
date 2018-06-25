import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from '../../components/Modal';
import NewPost from '../../components/NewPost';


import './product-list.css';

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.addToCart = this.addToCart.bind(this);
  }

  renderProducts() {
    return this.props.products.map((i, index) => (
      <div className="product_list_item" key={index}>
        <p>{i.name}</p>
        <p>Price: {i.price}</p>
        <p>{i.available > 0 ? 'In stock' : 'Sold out'}</p>
        <button className="add-to-cart-btn" onClick={() => this.addToCart(i,index) } disabled={i.available > 0 ? '' : 'disabled'}>Add to card</button>
      </div>
    ));
  }

  addToCart(i) {
    if(i.available > 0) {
      if(this.props.inCart.indexOf(i) === -1) {
        this.props.inCart.push(i);
      }
      i.available--;
      i.soud++;
    } else {
      return null;
    }
  }
  addNewProduct() {

  }
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
    <div className="App-product_list">
        <button className="product_list_item" onClick={this.toggleModal}>Add new product<span>+</span></button>
      {this.renderProducts()}
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          <NewPost  />
        </Modal>
    </div>);
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(ProductList);