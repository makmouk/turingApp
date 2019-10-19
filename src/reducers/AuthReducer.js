import {
  SELECTED_ID,
  GET_PRODUCTS,
  FETCH_ID,
  SET_CART_ID
} from "../actions/types";

const INITIAL_STATE = {
  productId: "",
  products: [],
  fetchId: 1,
  cartId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECTED_ID:
      return { ...state, productId: action.payload };
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case FETCH_ID:
      return { ...state, fetchId: action.payload };
    case SET_CART_ID:
      return { ...state, cartId: action.payload };
    default:
      return state;
  }
};
