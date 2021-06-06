import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
  status: 'idle',
};

export const fetchUserAsync = createAsyncThunk(
  'skills/fetchUser',
  async () => {
    const response = await axios.get('/ui/users/:id/answers');
    return response.data.skills;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    skillAdded: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchUserAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.value = [...state.value, ...action.payload];
      });
  },
});

export const { userAdded } = userSlice.actions;

// Selectors
export const SelectUser = state => state.skills.value;

export default userSlice.reducer;
