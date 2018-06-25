import { GET_PRODUCT_LIST, ADD_NEW_PRODUCT, ADD_TO_CARD} from '../actions/products.action';
import Products from '../constans/products.json';



export default function products(state = Products, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return state.products;
    case ADD_NEW_PRODUCT:
      return state.products;
    case ADD_TO_CARD:
      return state
    default:
      return state;
  }
}