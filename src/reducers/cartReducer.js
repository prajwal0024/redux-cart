import data from '../data';
import * as actionTypes from '../constants/actionTypes';

const initialState = {
  data,
  totalItems: data.length,
  subTotal: data.reduce((accumulator, item) => accumulator + item.price, 0),
};

const cartReducer = (state = initialState, action) => {
  if (action.type === actionTypes.INCREMENT) {
    let itemPrice = 0;
    const tempData = state.data.map((product) => {
      if (product.id === action.payload.itemId) {
        itemPrice = product.price;
        product = { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    return {
      data: tempData,
      totalItems: state.totalItems + 1,
      subTotal: state.subTotal + itemPrice,
    };
  }

  if (action.type === actionTypes.DECREMENT) {
    let itemPrice = 0;
    const tempData = state.data.map((product) => {
      if (product.id === action.payload.itemId) {
        itemPrice = product.price;
        product = { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });

    return {
      data: tempData,
      totalItems: state.totalItems - 1,
      subTotal: state.subTotal - itemPrice,
    };
  }

  if (action.type === actionTypes.REMOVE_ITEM) {
    let itemPrice = 0;
    let itemQuanity = 0;

    const tempData = state.data.filter((product) => {
      if (product.id === action.payload.itemId) {
        itemPrice = product.price;
        itemQuanity = product.quantity;
        return false;
      }
      return true;
    });

    return {
      data: tempData,
      totalItems: state.totalItems - itemQuanity,
      subTotal: state.subTotal - itemPrice * itemQuanity,
    };
  }

  if (action.type === actionTypes.CLEAR_CART) {
    return { ...state, data: [], totalItems: 0, subTotal: 0 };
  }

  return state;
};

export default cartReducer;
