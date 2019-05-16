import { createSelector } from 'reselect';

const getCartMenuIds = state => state.cart.ids;
const getCartMenuAmounts = state => state.cart.amount;
const getMenuEntities = state => state.menu.entities.menuItems;

export const getCartMenuAmount = createSelector(
  getCartMenuAmounts,
  objAmounts =>
    Object.values(objAmounts).reduce((acc, value) => acc + value, 0),
);

export const getCartMenu = createSelector(
  [getCartMenuIds, getCartMenuAmounts, getMenuEntities],
  (ids, amounts, entities) =>
    ids.map(id => ({
      ...entities[id],
      amount: amounts[id],
    })),
);

export const totalPrice = createSelector(
  getCartMenu,
  arr => arr.reduce((acc, value) => value.amount * value.price + acc, 0),
);

export default {
  getCartMenuAmount,
  getCartMenu,
  totalPrice,
};
