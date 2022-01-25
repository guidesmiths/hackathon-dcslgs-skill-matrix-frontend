import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
  status: 'idle',
  currentAnswers: [],
};

function config() {
  return { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
}

export const fetchUsersFilteredAsync = createAsyncThunk(
  'answers/fetchUsersFiltered',
  async filter => {
    const { pagination, userFilter, skillFilters } = filter;

    const response = await axios.post(`/ui/usersFiltered?page=${pagination}`, {
      name: userFilter,
      skills: skillFilters,
    }, config());
    return response.data;
  },
);

export const fetchAnswersByUserAsync = createAsyncThunk(
  'answers/fetchAnswersByUser',
  async id => {
    const response = await axios.post(`/ui/answersByUser/${id}`, {}, config());
    // maybe with a GET the empty object is not necessary? ^
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
    filterAnswerByUser: (state, action) => {
      state.currentAnswers = state.currentAnswers.filter(curr => curr.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsersFilteredAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUsersFilteredAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        const { users, currentPages, numberOfPages, totalItems } = action.payload;
        state.value = [...users];
        state.currentPages = currentPages;
        state.numberOfPages = numberOfPages;
        state.totalItems = totalItems;
      })
      .addCase(fetchAnswersByUserAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchAnswersByUserAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.currentAnswers = [...state.currentAnswers, ...action.payload];
      });
  },
});

export const { answerAdded, resetAnswers, filterAnswerByUser } = answersSlice.actions;

// Selectors
export const selectAllAnswers = state => state.answers.value;
export const selectAnswerPage = (start, end) => state => state.answers.value.slice(start, end);
export const selectNumberOfAnswers = state => state.answers.value.length;
export const selectCurrentAnswers = id => state => state.answers?.currentAnswers?.find(curr => curr.id === id);
export const selectNumberOfPages = state => state.answers.numberOfPages;
export const selectStatus = state => state.answers.status;

export default answersSlice.reducer;
