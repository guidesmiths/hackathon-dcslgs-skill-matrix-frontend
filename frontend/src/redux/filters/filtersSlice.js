import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: '',
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
      console.log('🚀 ~ file: filtersSlice.js ~ line 18 ~ filter', filter);
      if (filter) {
        state.skills[index] = filter;
      } else {
        const stateFilters = state.skills;
        const updatedFilters = stateFilters.length === 1
          ? [{}]
          : stateFilters.filter((_, i) => i !== action.payload);
        state.skills = updatedFilters;
        console.log(
          '🚀 ~ file: filtersSlice.js ~ line 20 ~ state.skills',
          state.skills,
        );
      }
    },
    removeSkillFilter: (state, action) => {
      const stateFilters = state.skills;
      const updatedFilters = stateFilters.length === 1
        ? [{}]
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

export const selectSkillFilters = state => state.filters.skills || [{ skill: null, level: 0 }];

export const selectUserFilter = state => state.filters.user;

export default filtersSlice.reducer;
