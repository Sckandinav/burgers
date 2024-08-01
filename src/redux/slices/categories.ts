import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categories, Burger } from '../types';

const initialState: categories = {
  category: ['Все'],
};

const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState,
  reducers: {
    getCategory(state, action: PayloadAction<Burger[]>) {
      action.payload.map(burger => (state.category.includes(burger.category) ? null : state.category.push(burger.category.toLowerCase())));
    },
  },
});

export const { getCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
