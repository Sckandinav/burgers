import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from './slices/burgers';

const store = configureStore({
  reducer: {
    burgers: burgerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
