import shop from '../constans/shop'
export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const ADD_TO_CARD = 'ADD_TO_CARD';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

export const getProductList = () => ({
  type: GET_PRODUCT_LIST
});

export const addNewProduct = payload => ({
  type: ADD_NEW_PRODUCT,
  product: payload
});

export const addToCart = () => ({
  type: ADD_TO_CARD
})

