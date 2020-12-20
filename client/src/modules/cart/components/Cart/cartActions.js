import { actionTypes } from './cartActionTypes'

export const addToCart = id => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    id,
  },
})

export const removeFromCart = id => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: {
    id,
  },
})

export const increaseAmount = id => ({
  type: actionTypes.INCREASE_AMOUNT,
  payload: {
    id,
  },
})

export const decreaseAmount = id => ({
  type: actionTypes.DECREASE_AMOUNT,
  payload: {
    id,
  },
})

export const cartActions = {
  addToCart,
  removeFromCart,
  increaseAmount,
  decreaseAmount,
}
