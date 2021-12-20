import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
  status: 'idle',
};

function config() {
  return { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
}

export const fetchSkillsAsync = createAsyncThunk(
  'skills/fetchSkills',
  async () => {
    const response = await axios.get('/ui/skills', config());
    return response.data;
  },
);

export const upsertSkillAsync = createAsyncThunk(
  'skills/upsertSkill',
  async skill => {
    const response = await axios.post('/ui/skill', skill, config());
    return response.data;
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
        state.value = action.payload;
      });
  },
});

export const { skillAdded } = skillsSlice.actions;

// Selectors
export const selectAllSkills = state => state.skills.value;

export const selectSkillById = (state, skillId) => state.skills.find(skill => skill.id === skillId);

export const selectSkillByName = (state, skillName) => state.skills.find(skill => skill.Name === skillName);

export default skillsSlice.reducer;
