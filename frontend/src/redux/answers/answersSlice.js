import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
  status: 'idle',
};

export const fetchAnswersAsync = createAsyncThunk(
  'answers/fetchAnswers',
  async () => {
    const response = await axios.get('/ui/answers');
    return response.data;
  },
);

export const fetchFilteredAnswersAsync = createAsyncThunk(
  'answers/fetchFilteredAnswers',
  async filter => {
    const response = await axios.post('/ui/answers', {
      name: filter.userFilter,
      skills: filter.skillFilters,
    });
    return response.data;
  },
);

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    answerAdded: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
    resetAnswers: state => {
      state.value = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAnswersAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchAnswersAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.value = [...state.value, ...action.payload];
      })
      .addCase(fetchFilteredAnswersAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchFilteredAnswersAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.value = [...state.value, ...action.payload];
      });
  },
});

export const { answerAdded, resetAnswers } = answersSlice.actions;

// Selectors
export const selectAllAnswers = state => state.answers.value;

export const selectAnswerPage = (start, end) => state => state.answers.value.slice(start, end);

export const selectNumberOfAnswers = state => state.answers.value.length;

export default answersSlice.reducer;
