import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from './slices/burgers';
import categoriesReducer from './slices/categories';
import sortReducer from './slices/sort';

const store = configureStore({
  reducer: {
    burgers: burgerReducer,
    categories: categoriesReducer,
    sort: sortReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
