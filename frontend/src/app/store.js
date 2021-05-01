import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from '../redux/skills/skillsSlice';
import answersReducer from '../redux/answers/answersSlice';

export default configureStore({
  reducer: {
    skills: skillsReducer,
    answers: answersReducer,
  },
});
