export const GET_CART_ITEMS = 'GET_CART_ITEMS';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_AMOUNT = 'INCREASE_AMOUNT';
export const REDUCE_AMOUNT = 'REDUCE_AMOUNT';


export const getCartItems = () => ({
  type: GET_CART_ITEMS
});
export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  productId: id
});
export const increaseAmount = () => ({
  type: INCREASE_AMOUNT
});
export const reduceAmount = () => ({
  type: REDUCE_AMOUNT
})
