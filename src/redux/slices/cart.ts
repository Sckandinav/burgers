import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartSliceState, cartItem } from '../types';
import { calcTotalCount, calcTotalPrice } from '../../utils/CartsCalculate';

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<cartItem>) {
      const checkItem = state.items.find(obj => obj.id === action.payload.id);
      if (checkItem) {
        if (checkItem.count) {
          checkItem.count += 1;
        }
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalCount = calcTotalCount(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusProduct(state, action: PayloadAction<cartItem>) {
      const removableItem = state.items.find(el => el.id === action.payload.id);
      if (removableItem) {
        removableItem.count -= 1;
        if (removableItem.count === 0) {
          state.items = state.items.filter(el => el.id !== removableItem.id);
        }
      }
      state.totalCount = calcTotalCount(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearCart(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, minusProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
