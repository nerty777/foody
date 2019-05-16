import * as API from '../../services/api';
import actions from './menuActions';

const fetchMenuItems = () => async dispatch => {
  dispatch(actions.fetchLoading());
  try {
    const data = await API.getAllMenuItems();
    dispatch(actions.fetchAllItemsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const fetchMenuOneItem = id => async dispatch => {
  dispatch(actions.fetchLoading());
  try {
    const data = await API.getMenuItemById(id);
    if (data) {
      dispatch(actions.fetchMenuOneItemSuccess(data));
    }
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const getMenuOneItemForModal = id => async dispatch => {
  dispatch(actions.fetchLoading());
  try {
    dispatch(actions.modalOpen());
    dispatch(actions.fetchMenuOneItemSuccess(id));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const fetchAddMenuItem = item => async dispatch => {
  dispatch(actions.fetchLoading());
  try {
    const data = await API.addItem(item);
    if (data) {
      dispatch(actions.addMenuItemSuccess(item));
    } else {
      throw new Error('error delete item!');
    }
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const fetchDeleteMenuItem = id => async dispatch => {
  dispatch(actions.fetchLoading());
  try {
    const data = await API.deleteItem(id);
    if (data) {
      dispatch(actions.deleteMenuItemSuccess(id));
    } else {
      throw new Error('error delete item!');
    }
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const fetchAllCategories = () => async dispatch => {
  dispatch(actions.fetchLoading());
  try {
    const data = await API.getAllCategoryItems();
    dispatch(actions.fetchAllCategoriesSuccess(data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const fetchMenuByCategory = category => async dispatch => {
  dispatch(actions.fetchLoading());
  try {
    const data = await API.getMenuItemsWithCategory(category);
    dispatch(actions.fetchAllItemsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const closeModal = () => dispatch => {
  dispatch(actions.modalClose());
};

const handleFilterChange = filter => dispatch => {
  dispatch(actions.changeFilter(filter));
};

export default {
  fetchMenuItems,
  fetchMenuOneItem,
  fetchAddMenuItem,
  fetchDeleteMenuItem,
  getMenuOneItemForModal,
  closeModal,
  fetchAllCategories,
  fetchMenuByCategory,
  handleFilterChange,
};
