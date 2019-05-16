import { createSelector } from 'reselect';

const getMenuOneItem = state => state.menu.menuOneItem;
const modalStatus = state => state.menu.modalStatus;
const getFilter = state => state.menu.filter.toLowerCase();

export const getMenuItemsEntities = state => state.menu.entities.menuItems;
export const getMenuItemsIDs = state => state.menu.menuIDs;
export const getCategoriesEntities = state => state.menu.entities.categories;
export const getCategoriesIDs = state => state.menu.categoriesIDs;

export const getMenuItems = createSelector(
  [getMenuItemsIDs, getMenuItemsEntities],
  (ids, entities) => ids.map(id => entities[id]),
);

export const getAllCategories = createSelector(
  [getCategoriesIDs, getCategoriesEntities],
  (ids, entities) => ids.map(id => entities[id]),
);

export const getFilteredMenuItems = createSelector(
  [getMenuItems, getFilter],
  (itemsArray, filter) =>
    itemsArray.filter(e => e.name.toLowerCase().includes(filter)),
);

export const getMenuOneItemForModal = createSelector(
  [getMenuItems, getMenuOneItem],
  (itemsArray, id) => itemsArray.find(item => item.id === id),
);

export default {
  getMenuItems,
  getMenuOneItem,
  getAllCategories,
  modalStatus,
  getFilteredMenuItems,
  getMenuOneItemForModal,
};
