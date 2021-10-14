import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
  status: 'idle',
};

export const fetchSkillsAsync = createAsyncThunk(
  'skills/fetchSkills',
  async () => {
    const response = await axios.get('/ui/skills');
    return response.data;
  },
);

export const insertSkillAsync = createAsyncThunk(
  'skills/insertSkill',
  async skill => {
    const response = await axios.post('/ui/skill', skill);
    return response.data;
  },
);

export const deleteSkillAsync = createAsyncThunk(
  'skills/deleteSkill',
  async id => {
    await axios.delete(`/ui/skill/${id}`);
    return id;
  },
);

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    skillAdded: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
    removeSkill: (state, action) => {
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
      })
      .addCase(insertSkillAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(insertSkillAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.value = [...state.value, ...action.payload];
      })
      .addCase(deleteSkillAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(deleteSkillAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        const updatedSkills = state.value.filter(({ id }) => id !== action.payload);
        state.value = [...updatedSkills];
      });
  },
});

export const { skillAdded } = skillsSlice.actions;

// Selectors
export const selectAllSkills = state => state.skills.value;

export const selectSkillById = (state, skillId) => state.skills.find(skill => skill.id === skillId);

export const selectSkillByName = (state, skillName) => state.skills.find(skill => skill.Name === skillName);

export default skillsSlice.reducer;
