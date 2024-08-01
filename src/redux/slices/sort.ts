import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortSliceState } from '../types';
import { sortParser } from '../../utils/sortParser';

const initialState: SortSliceState = {
  categories: '',
  sortBy: 'По умолчанию',
  orderBy: '',
};

const sortSlice = createSlice({
  name: 'SortSlice',
  initialState,
  reducers: {
    setSortProperties(state, action: PayloadAction<string>) {
      const data = sortParser(action.payload);
      state.orderBy = data.orderBy;
      state.sortBy = data.sortBy;
    },
    setCategory(state, action: PayloadAction<string>) {
      const selectedCategory = action.payload.trim();
      if (selectedCategory === 'Все') {
        state.categories = '';
      } else state.categories = selectedCategory;
    },
  },
});

export const { setSortProperties, setCategory } = sortSlice.actions;
export default sortSlice.reducer;
