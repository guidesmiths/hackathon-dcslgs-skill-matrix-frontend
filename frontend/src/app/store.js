import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from '../redux/skills/skillsSlice';
import answersReducer from '../redux/answers/answersSlice';
import userReducer from '../redux/user/userSlice';

export default configureStore({
  reducer: {
    skills: skillsReducer,
    answers: answersReducer,
    user: userReducer,
  },
});
