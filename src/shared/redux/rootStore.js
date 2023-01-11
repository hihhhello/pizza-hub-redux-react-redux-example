import { combineReducers, createStore } from 'redux';

import { cartReducer } from './stores/cart';

export const rootReducer = combineReducers({
  cart: cartReducer,
});

export const rootStore = createStore(rootReducer);
