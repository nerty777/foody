import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

const getAllMenuItems = async () => {
  const response = await axios.get('/menu');
  return response.data;
};

const getAllOrderHistory = async () => {
  const response = await axios.get('/order-history');
  return response.data;
};

const getAllCategoryItems = async () => {
  const response = await axios.get('/categories');
  return response.data;
};

const getMenuItemById = async id => {
  const response = await axios.get(`/menu/${id}`);
  return response.data;
};

const getOrderHistoryItemById = async id => {
  const response = await axios.get(`/order-history/${id}`);
  return response.data;
};

const deleteItem = async id => {
  const response = await axios.delete(`/menu/${id}`);
  return response.status === 200;
};

const deleteOrderHistoryItem = async id => {
  const response = await axios.delete(`/order-history/${id}`);
  return response.status === 200;
};

const addItem = async item => {
  const response = await axios.post('/menu', item);
  return response.data;
};

const addOrderHistoryItem = async item => {
  const response = await axios.post('/order-history', item);
  return response.data;
};

const getMenuItemsWithCategory = async category => {
  if (category === 'all') {
    return getAllMenuItems();
  }
  const response = await axios.get(`/menu?category=${category}`);
  return response.data;
};

export {
  getAllMenuItems,
  getAllCategoryItems,
  getMenuItemById,
  deleteItem,
  addItem,
  getMenuItemsWithCategory,
  getAllOrderHistory,
  getOrderHistoryItemById,
  deleteOrderHistoryItem,
  addOrderHistoryItem,
};
