import { createSlice } from '@reduxjs/toolkit';

import fetchBurgers from '../api';
import { BurgerSliceState } from '../types';

const initialState: BurgerSliceState = {
  burgers: [],
  isLoading: false,
  isError: false,
};

const burgersSlice = createSlice({
  name: 'burgersSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchBurgers.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchBurgers.fulfilled, (state, action) => {
      state.burgers = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchBurgers.rejected, state => {
      state.isLoading = false;
      state.isError = true;
      state.burgers = [];
    });
  },
});

export default burgersSlice.reducer;
