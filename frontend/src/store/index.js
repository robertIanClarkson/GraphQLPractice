import { combineReducers, createStore } from 'redux';
import { cars } from './reducers/cars';
import { persons } from './reducers/persons';

export const reducers = combineReducers({
  cars,
  persons
});

// store.js
export function configureStore() {
  const store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
}

export const store = configureStore();
