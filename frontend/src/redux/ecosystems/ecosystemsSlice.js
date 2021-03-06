import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
  status: 'idle',
};

function config() {
  return { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
}

export const fetchEcosystemsAsync = createAsyncThunk(
  'ecosystems/fetchEcosystems',
  async () => {
    const response = await axios.get('/ui/ecosystems', config());
    return response.data;
  },
);

export const fetchSkillByEcosystemIdAsync = createAsyncThunk(
  'ecosystems/fetchSkillsByEcosystemId',
  async id => {
    const response = await axios.get(`/ui/ecosystem/${id}`, config());
    return response.data;
  },
);

export const upsertEcosystemAsync = createAsyncThunk(
  'ecosystems/upsertEcosystem',
  async ecosystem => {
    const response = await axios.post('/ui/ecosystem', ecosystem, config());
    return response.data;
  },
);

export const deleteEcosystemAsync = createAsyncThunk(
  'ecosystems/deleteEcosystem',
  async id => {
    await axios.delete(`/ui/ecosystem/${id}`, config());
    return id;
  },
);

export const deleteSkillAsync = createAsyncThunk(
  'ecosystems/deleteSkill',
  async id => {
    await axios.delete(`/ui/skill/${id}`, config());
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
    removeSkill: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchEcosystemsAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchEcosystemsAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.value = [...action.payload];
      })
      .addCase(fetchSkillByEcosystemIdAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchSkillByEcosystemIdAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.currentEcosystem = [...action.payload];
      })
      .addCase(deleteEcosystemAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(deleteEcosystemAsync.fulfilled, (state, action) => {
        state.status = 'success';
        const updatedEcosystems = state.value.filter(({ id }) => id !== action.payload);
        state.value = [...updatedEcosystems];
      })
      .addCase(deleteSkillAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(deleteSkillAsync.fulfilled, (state, action) => {
        state.status = 'success';
        const updatedSkills = state.value.filter(({ id }) => id !== action.payload);
        state.value = [...updatedSkills];
      });
  },
});

export const { ecosystemAdded, removeEcosystem, removeSkill } = ecosystemsSlice.actions;

// Selectors
export const selectAllEcosystems = state => state.ecosystems.value;
export const selectEcosystemsStatus = state => state.ecosystems.status;
export const selectSkillsPerSystem = id => state => state.ecosystems?.value?.find(ecosystem => ecosystem.id === id)?.skills || [];
export const selectCurrentEcosystem = state => state.ecosystems?.currentEcosystem?.[0];

export default ecosystemsSlice.reducer;
