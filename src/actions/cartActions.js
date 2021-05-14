import * as actionTypes from '../constants/actionTypes';

export const incrementItemQuantity = (itemId) => ({
  type: actionTypes.INCREMENT,
  payload: { itemId },
});

export const decrementItemQuantity = (itemId) => ({
  type: actionTypes.DECREMENT,
  payload: { itemId },
});

export const removeCartItem = (itemId) => ({
  type: actionTypes.REMOVE_ITEM,
  payload: { itemId },
});

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART,
});
