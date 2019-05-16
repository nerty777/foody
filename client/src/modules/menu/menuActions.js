import { normalize } from 'normalizr';
import { menuItemsSchema, categoriesSchema } from '../schemas/schemas';
import types from './menuActionTypes';

const fetchLoading = () => ({
  type: types.FETCH_LOADING,
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error.message,
});

const fetchAllItemsSuccess = denormalizedMenuAllItems => {
  const normalizedMenu = normalize(denormalizedMenuAllItems, [menuItemsSchema]);
  return {
    type: types.FETCH_SUCCESS_ALL_ITEMS,
    payload: {
      entities: normalizedMenu.entities,
      IDs: {
        menuItemsIds: Object.keys(normalizedMenu.entities.menuItems),
      },
    },
  };
};

const fetchMenuOneItemSuccess = id => ({
  type: types.FETCH_SUCCESS_ONE_ITEM,
  payload: id,
});

const fetchAllCategoriesSuccess = denormalizedCategories => {
  const normalizedCategories = normalize(denormalizedCategories, [
    categoriesSchema,
  ]);
  return {
    type: types.FETCH_SUCCESS_ALL_CATEGORIES,
    payload: {
      entities: normalizedCategories.entities,
      IDs: {
        menuCategoriesIds: Object.keys(
          normalizedCategories.entities.categories,
        ),
      },
    },
  };
};

const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter,
});

const addMenuItemSuccess = item => ({
  type: types.ADD_SUCCESS,
  payload: item,
});

const deleteMenuItemSuccess = id => ({
  type: types.DELETE_SUCCESS,
  payload: id,
});

const modalOpen = () => ({
  type: types.MODAL_OPEN,
});

const modalClose = () => ({
  type: types.MODAL_CLOSE,
});

export default {
  fetchLoading,
  fetchError,
  fetchAllItemsSuccess,
  fetchMenuOneItemSuccess,
  addMenuItemSuccess,
  deleteMenuItemSuccess,
  modalOpen,
  modalClose,
  fetchAllCategoriesSuccess,
  changeFilter,
};
