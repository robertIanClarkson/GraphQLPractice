import { combineReducers, createStore } from 'redux';
import { geod } from './reducers/index';

export const reducers = combineReducers({
  geod,
});

// store.js
export function configureStore() {
  const store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
}

export const store = configureStore();
