import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
  status: 'idle',
};

export const fetchSuggestionsAsync = createAsyncThunk(
  'suggestions/fetchSuggestions',
  async () => {
    const response = await axios.get('/ui/suggestions');
    return response.data;
  },
);

export const deleteSuggestionAsync = createAsyncThunk(
  'suggestions/deleteSuggestion',
  async id => {
    await axios.delete('/ui/suggestions', {
      params: {
        id,
      },
    });
    return id;
  },
);

export const suggestionsSlice = createSlice({
  name: 'suggestions',
  initialState,
  reducers: {
    removeSuggestion: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSuggestionsAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchSuggestionsAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.value = [...state.value, ...action.payload];
      })
      .addCase(deleteSuggestionAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(deleteSuggestionAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        const updatedSuggestions = state.value.filter(({ id }) => id !== action.payload);
        state.value = [...updatedSuggestions];
      });
  },
});

export const { removeSuggestion } = suggestionsSlice.actions;

export const selectSuggestionsByRange = (start, end) => state => state.suggestions.value.slice(start, end);

export const selectNumberOfSuggestions = state => state.suggestions.value.length;

export default suggestionsSlice.reducer;
