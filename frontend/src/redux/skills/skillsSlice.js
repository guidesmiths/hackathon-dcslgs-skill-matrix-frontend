import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
  status: 'idle',
};

export const fetchSkillsAsync = createAsyncThunk(
  'skills/fetchSkills',
  async () => {
    const response = await axios.get('/ui/skills/catalog');
    return response.data.skills;
  },
);

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    skillAdded: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchSkillsAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchSkillsAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.value = [...state.value, ...action.payload];
      });
  },
});

export const { skillAdded } = skillsSlice.actions;

// Selectors
export const selectAllSkills = state => state.skills.value;

export const selectSkillById = (state, skillId) => state.skills.find(skill => skill.id === skillId);

export const selectSkillByName = (state, skillName) => state.skills.find(skill => skill.Name === skillName);

export default skillsSlice.reducer;
