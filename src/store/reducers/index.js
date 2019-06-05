import { combineReducers } from "redux";
import currentUser from "./currentUser";
import cart from './cart';

const rootReducer = combineReducers({
  currentUser,
  cart,
  // animation
})

// const rootReducer = currentUser;

export default rootReducer;