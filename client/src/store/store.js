import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import menuReducer from '../modules/menu/menuReducer';
import cartReducer from '../modules/cart/components/Cart/cartReducer';
import authReducer from '../modules/auth/authReducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['menu'],
};

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['ids', 'amount'],
};

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  menu: menuReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  session: persistReducer(sessionPersistConfig, authReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const middlewares = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middlewares);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
