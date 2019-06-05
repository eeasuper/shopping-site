import {LOAD_CART, ADD_TO_CART, REMOVE_FROM_CART,CHANGE_QUANTITY_OF_CARTITEM} from '../actionTypes';

const DEFAULT_STATE = {
  cart: [], 
  cartId: -1
};
//How redux works: 
//cart.js becomes an object of state in redux. [...action.products] get inserted into state.cart. 
export default (state=DEFAULT_STATE, action) => {
  //state refers to cart in the redux state.
  switch(action.type){
    case LOAD_CART:
      if(action.cart.cartItems){
        return {
          cart: action.cart.cartItems,
          cartId: action.cart.id
        }
      }
      return DEFAULT_STATE;
    case REMOVE_FROM_CART:
      //changing Object into array for filtering:
      return action.cart;
    case ADD_TO_CART:
      return {
        cart: action.cart.cartItems,
        cartId: action.cart.id
      }
    case CHANGE_QUANTITY_OF_CARTITEM:
      return action.cart;
    default:
      return state;
  }
}