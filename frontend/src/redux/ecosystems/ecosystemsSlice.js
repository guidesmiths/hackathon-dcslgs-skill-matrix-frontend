import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
  status: 'idle',
};

export const fetchEcosystemsAsync = createAsyncThunk(
  'ecosystems/fetchEcosystems',
  async () => {
    const response = await axios.get('/ui/ecosystems');
    return response.data;
  },
);

export const insertEcosystemAsync = createAsyncThunk(
  'ecosystems/insertEcosystem',
  async ecosystem => {
    // We are receiving an ecosystem, but on the backend the body is empty :(
    const response = await axios.post('/ui/ecosystem', ecosystem);
    return response.data;
  },
);

export const deleteEcosystemAsync = createAsyncThunk(
  'ecosystems/deleteEcosystem',
  async id => {
    await axios.delete(`/ui/ecosystem/${id}`);
    return id;
  },
);

export const ecosystemsSlice = createSlice({
  name: 'ecosystems',
  initialState,
  reducers: {
    ecosystemAdded: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
    removeEcosystem: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
    resetEcosystems: state => {
      state.value = [];
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
      })
      .addCase(insertEcosystemAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(insertEcosystemAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.value = [...state.value, ...action.payload];
      })
      .addCase(deleteEcosystemAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(deleteEcosystemAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        const updatedEcosystems = state.value.filter(({ id }) => id !== action.payload);
        state.value = [...updatedEcosystems];
      });
  },
});

export const { ecosystemAdded, removeEcosystem, resetEcosystems } = ecosystemsSlice.actions;

// Selectors
export const selectAllEcosystems = state => state.ecosystems.value;
export const selectSkillsPerSystem = id => state => state.ecosystems?.value?.[id]?.skills || [];

export default ecosystemsSlice.reducer;
