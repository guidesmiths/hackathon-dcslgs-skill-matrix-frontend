import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
  skillsSelected: [],
  status: 'idle',
};

export const fetchUserAsync = createAsyncThunk(
  'user/fetchUser',
  async () => {
    const response = await axios.get('/ui/users/:id/answers');
    return response.data;
  },
);

export const fetchUpdatedUserAsync = createAsyncThunk(
  'answers/fetchUpdatedUser',
  async user => {
    const response = await axios.post('/ui/users/:id/answers', {
      user,
    });
    return response.data;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userAdded: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
    updateUserSkill: (state, action) => {
      const { index, skillId, skill } = action.payload;
      state.value.ecosystems[index].skills[skillId] = skill;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchUserAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.value = action.payload;
      });
  },
});

export const { userAdded, updateEcosystem, updateSkill, updateUserSkill } = userSlice.actions;

// Selectors
export const selectUserData = state => state.user.value;
export const selectSkillsWithLevel = id => state => state.user?.value?.ecosystems?.[id]?.skills || [];
export const selectEcosystemPerId = id => state => state.user?.value?.ecosystems?.[id];

export default userSlice.reducer;
