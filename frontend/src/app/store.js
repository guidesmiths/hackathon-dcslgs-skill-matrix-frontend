import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from '../redux/skills/skillsSlice';

export default configureStore({
  reducer: {
    skills: skillsReducer,
  },
});
