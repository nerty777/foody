import { combineReducers } from 'redux';
import types from './menuActionTypes';

function menuReducer(state = [], action) {
  switch (action.type) {
    case types.FETCH_SUCCESS_ALL_ITEMS:
      return action.payload.IDs.menuItemsIds;
    case types.DELETE_SUCCESS:
      state.filter(item => console.log(item));
      return state.filter(item => +item !== action.payload);
    default:
      return state;
  }
}

function entityReducer(state = {}, action) {
  if (action.payload && action.payload.entities) {
    const newState = { ...state };
    Object.keys(action.payload.entities).forEach(entityKey => {
      newState[entityKey] = {
        ...state[entityKey],
        ...action.payload.entities[entityKey],
      };
    });
    return newState;
  }
  return state;
}

function menuOneItemReducer(state = {}, action) {
  switch (action.type) {
    case types.FETCH_SUCCESS_ONE_ITEM:
      return action.payload;
    case types.ADD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

function modalStatusReducer(state = false, action) {
  switch (action.type) {
    case types.MODAL_OPEN:
      return true;
    case types.MODAL_CLOSE:
      return false;
    default:
      return state;
  }
}

function categoriesReducer(state = [], action) {
  switch (action.type) {
    case types.FETCH_SUCCESS_ALL_CATEGORIES:
      return action.payload.IDs.menuCategoriesIds;
    default:
      return state;
  }
}

function filterReducer(state = '', action) {
  switch (action.type) {
    case types.CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
}

function loadingReducer(state = false, action) {
  switch (action.type) {
    case types.FETCH_LOADING:
      return true;
    case types.FETCH_SUCCESS_ALL_ITEMS:
    case types.FETCH_ERROR:
      return false;
    default:
      return state;
  }
}

function errorReducer(state = null, action) {
  switch (action.type) {
    case types.FETCH_LOADING:
      return null;
    case types.FETCH_ERROR:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  entities: entityReducer,
  menuIDs: menuReducer,
  filter: filterReducer,
  isLoading: loadingReducer,
  error: errorReducer,
  categoriesIDs: categoriesReducer,
  menuOneItem: menuOneItemReducer,
  modalStatus: modalStatusReducer,
});
