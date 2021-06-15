import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  infoData: {},
  ecosystems: [],
  status: 'idle',
};

export const fetchUserAsync = createAsyncThunk(
  'user/fetchUser',
  async () => {
    const response = await axios.get('/ui/users/:id/answers');
    return response.data;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userAdded: (state, action) => {
      const { id, email, name } = action.payload;
      state.infoData = { id, email, name };
      state.ecosystems = [...state.ecosystems, ...action.payload.ecosystems];
    },
    updateEcosystem: (state, action) => {
      const { index, ecosystem } = action.payload;
      state.ecosystem[index] = ecosystem;
    },
    updateSkill: (state, action) => {
      const { index, skill, skillIndex } = action.payload;
      state.ecosystem[index].skills[skillIndex] = skill;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchUserAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        const { id, email, name } = action.payload;
        state.infoData = { id, email, name };
        state.ecosystems = [...state.ecosystems, ...action.payload.ecosystems];
      });
  },
});

export const { userAdded, updateEcosystem, updateSkill } = userSlice.actions;

// Selectors
export const selectUser = state => state.user.infoData;
export const selectEcosystems = state => state.user.ecosystems;

export default userSlice.reducer;
