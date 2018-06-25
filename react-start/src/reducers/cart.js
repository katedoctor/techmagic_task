import { REMOVE_FROM_CART, INCREASE_AMOUNT, REDUCE_AMOUNT, GET_CART_ITEMS} from '../actions/cart.actions';

export default function cart(state = [], action) {
  switch (action.type) {
    case REMOVE_FROM_CART:
      return state
    case INCREASE_AMOUNT:
      return state
    case REDUCE_AMOUNT:
      return state
    case GET_CART_ITEMS:
      return { inCart: [...state.inCart, action.payload]}
    default:
      return state
  }
  return state;
}