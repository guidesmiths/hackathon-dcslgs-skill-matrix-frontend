import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
  skillsSelected: [],
  status: 'idle',
};

export const fetchEcosystemsAsync = createAsyncThunk(
  'user/fetchEcosystems',
  async () => {
    const response = await axios.get('/ui/ecosystems/answers');
    return response.data.ecosystems;
  },
);

export const ecosystemsSlice = createSlice({
  name: 'ecosystems',
  initialState,
  reducers: {
    ecosystemAdded: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
    updateEcosystemSelected: (state, action) => {
      const { id } = action.payload;
      state.skillsSelected = state.value[id].skills;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchEcosystemsAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchEcosystemsAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.value = [...state.value, ...action.payload];
      });
  },
});

export const {
  ecosystemAdded,
  updateEcosystemSelected,
} = ecosystemsSlice.actions;

// Selectors
export const selectAllEcosystems = state => state.ecosystems.value;
export const selectSkillsPerSystem = id => state => state.ecosystems?.value?.[id]?.skills || [];

export default ecosystemsSlice.reducer;
