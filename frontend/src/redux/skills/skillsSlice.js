import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchSkillsAsync = createAsyncThunk(
  'skills/fetchSkills',
  async () => {
    const response = await axios.get('/ui/skills/catalog');
    // The value we return becomes the `fulfilled` action payload
    return response.data.skills;
  },
);

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    skillAdded: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
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

export const { skillAdded, incrementByAmount } = skillsSlice.actions;

// Selectors
export const selectAllSkills = state => state.skills.value;

export const selectSkillById = (state, skillId) =>
  state.skills.find(skill => skill.id === skillId);

export const selectSkillByName = (state, skillName) =>
  state.skills.find(skill => skill.Name === skillName);

export default skillsSlice.reducer;
