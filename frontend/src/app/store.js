import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from '../redux/skills/skillsSlice';
import answersReducer from '../redux/answers/answersSlice';
import userReducer from '../redux/user/userSlice';
import filtersReducer from '../redux/filters/filtersSlice';
import EcosystemsReducer from '../redux/ecosystems/ecosystemsSlice';

export default configureStore({
  reducer: {
    skills: skillsReducer,
    answers: answersReducer,
    user: userReducer,
    filters: filtersReducer,
    ecosystems: EcosystemsReducer,
  },
});
