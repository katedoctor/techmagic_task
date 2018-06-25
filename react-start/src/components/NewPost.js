import React, { Component } from 'react';
import { connect } from 'react-redux';

export class NewPost extends Component {
  addNewProduct() {

  }
  handleChange(e){

  }
  render(){
    return (
      <div>
        <form>
          <input placeholder='name of product' onChange={this.handleChange} name='name'/>
          <input placeholder='price' onChange={this.handleChange} name='price'/>
          <input placeholder='amount of available' onChange={this.handleChange} name='available'/>
          <button type="submit" >Add new product</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(NewPost);