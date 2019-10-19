import { Actions } from "react-native-router-flux";
import {
  GET_PRODUCTS,
  SELECTED_ID,
  FETCH_ID,
  SET_CART_ID
} from "./types";
import axios from "axios";

export const fetchProducts = id => {
  return dispatch => {
    getProducts(dispatch, id);
  };
};

const getProducts = async (dispatch, id) => {
  await axios
    .get("https://mobilebackend.turing.com/products/inDepartment/" + id, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      dispatch({ type: GET_PRODUCTS, payload: response.data.rows });
    });
};

export const selectProduct = productId => {
  return dispatch => {
    dispatch({ type: SELECTED_ID, payload: productId.product_id });
    Actions.ProductScreen();
  };
};

export const fetchId = id => {
  return dispatch => {
    dispatch({ type: FETCH_ID, payload: id });
  };
};

export const setCartId = cartId => {
  return dispatch => {
    dispatch({ type: SET_CART_ID, payload: cartId });
  };
};