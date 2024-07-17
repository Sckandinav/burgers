import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Burger } from './types';

const URL = 'https://653164904d4c2e3f333cf1ac.mockapi.io/items';

const fetchBurgers = createAsyncThunk<Burger[]>('burgers/fetchBurgers', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(URL);
    if (response.status !== 200) {
      throw new Error('Server Error');
    }
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

export default fetchBurgers;
