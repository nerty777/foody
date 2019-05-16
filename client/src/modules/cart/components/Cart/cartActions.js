import types from './cartActionTypes';

export const addToCart = id => ({
  type: types.ADD_TO_CART,
  payload: {
    id,
  },
});

export const removeFromCart = id => ({
  type: types.REMOVE_FROM_CART,
  payload: {
    id,
  },
});

export const increaseAmount = id => ({
  type: types.INCREASE_AMOUNT,
  payload: {
    id,
  },
});

export const decreaseAmount = id => ({
  type: types.DECREASE_AMOUNT,
  payload: {
    id,
  },
});

export default { addToCart, removeFromCart, increaseAmount, decreaseAmount };
