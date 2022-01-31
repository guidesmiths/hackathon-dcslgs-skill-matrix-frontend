import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skills: [{}],
  status: 'idle',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addSkillFilter: state => {
      state.skills = [...state.skills, {}];
    },
    updateSkillFilter: (state, action) => {
      const { index, filter } = action.payload;
      state.skills[index] = filter;
    },
    removeSkillFilter: (state, action) => {
      const stateFilters = state.skills;
      const updatedFilters = stateFilters.length === 1
        ? [{}]
        : stateFilters.filter((_, i) => i !== action.payload);

      state.skills = updatedFilters;
    },
    resetFilters: state => {
      state.skills = [{}];
    },
  },
});

export const {
  addSkillFilter,
  updateSkillFilter,
  removeSkillFilter,
  resetFilters,
} = filtersSlice.actions;

export const selectSkillFilters = state => state.filters.skills || [{ skill: null, level: 0 }];

export const selectUserFilter = state => state.filters.user;

export default filtersSlice.reducer;
