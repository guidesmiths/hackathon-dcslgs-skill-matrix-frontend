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

export const insertSuggestionAsync = createAsyncThunk(
  'suggestions/insertSuggestion',
  async suggestion => {
    // Please, replace the 'user_id_test' with the user_id logged.
    const response = await axios.post('/ui/suggestion', {
      description: suggestion.suggestion,
      subject: suggestion.selectedSuggestion,
      user_id: 'user_id_test',
    });
    return response.data;
  },
);

export const deleteSuggestionAsync = createAsyncThunk(
  'suggestions/deleteSuggestion',
  async id => {
    await axios.delete(`/ui/suggestion/${id}`);
    return id;
  },
);

export const suggestionsSlice = createSlice({
  name: 'suggestions',
  initialState,
  reducers: {
    suggestionAdded: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
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
      .addCase(insertSuggestionAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(insertSuggestionAsync.fulfilled, (state, action) => {
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

export const selectAllSuggestions = state => state.suggestions.value;

export default suggestionsSlice.reducer;
