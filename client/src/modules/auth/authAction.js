import actionTypes from './authActionTypes';

export const signUpRequest = () => ({
  type: actionTypes.SIGN_UP_REQUEST,
});

export const signUpSuccess = data => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload: data,
});

export const signUpError = error => ({
  type: actionTypes.SIGN_UP_ERROR,
  payload: {
    error,
  },
});

export const signInRequest = () => ({
  type: actionTypes.SIGN_IN_REQUEST,
});

export const signInSuccess = data => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: data,
});

export const signInError = error => ({
  type: actionTypes.SIGN_IN_ERROR,
  payload: {
    error,
  },
});

export const signOutRequest = () => ({
  type: actionTypes.SIGN_OUT_REQUEST,
});

export const signOutSuccess = () => ({
  type: actionTypes.SIGN_OUT_SUCCESS,
});

export const refreshUserStart = () => ({
  type: actionTypes.REFRESH_CURRENT_USER_START,
});

export const refreshUserSuccess = user => ({
  type: actionTypes.REFRESH_CURRENT_USER_SUCCESS,
  payload: {
    user,
  },
});
