import { createSlice } from '@reduxjs/toolkit';

const defaultFilter = { skill: '', level: 1 };

const initialState = {
  user: '',
  skills: [defaultFilter],
  status: 'idle',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addSkillFilter: state => {
      state.skills = [...state.skills, defaultFilter];
    },
    updateSkillFilter: (state, action) => {
      const { index, filter } = action.payload;
      state.skills[index] = filter;
    },
    removeSkillFilter: (state, action) => {
      const stateFilters = state.skills;
      const updatedFilters = stateFilters.length === 1
        ? [defaultFilter]
        : stateFilters.filter((_, i) => i !== action.payload);
      state.skills = updatedFilters;
    },
    updateUserFilter: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  addSkillFilter,
  updateSkillFilter,
  removeSkillFilter,
  updateUserFilter,
} = filtersSlice.actions;

export const selectSkillFilters = state => state.filters.skills;

export const selectUserFilter = state => state.filters.user;

export default filtersSlice.reducer;
