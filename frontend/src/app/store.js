import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from '../redux/skills/skillsSlice';
import answersReducer from '../redux/answers/answersSlice';
import filtersReducer from '../redux/filters/filtersSlice';
import suggestionsReducer from '../redux/suggestions/suggestionsSlice';

export default configureStore({
  reducer: {
    skills: skillsReducer,
    answers: answersReducer,
    filters: filtersReducer,
    suggestions: suggestionsReducer,
  },
});
