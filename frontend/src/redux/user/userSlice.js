/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
  skillsSelected: [],
  status: 'idle',
};

export const fetchAnswersByUserAsync = createAsyncThunk('user/fetchAnswersByUser', async user => {
  const response = await axios.get(`/ui/user/${user}/answers`);
  return response.data;
});

export const fetchUpdatedUserAsync = createAsyncThunk(
  'answers/fetchUpdatedUser',
  async user => {
    const response = await axios.post('/ui/users/:id/answers', {
      user,
    });
    return response.data;
  },
);

export const insertAnswersAsync = createAsyncThunk(
  'answers/insertAnswers',
  async userData => {
    const { ecosystems, id: user } = userData;
    const answers = ecosystems.flatMap(ecosystem => ecosystem.skills.map(skill => {
      const { id: skillId, level, sublevel, interested, comments } = skill;
      return ({
        skill_id: skillId,
        skill_value: level,
        skill_subvalue: sublevel || 'neutral',
        interested,
        comments,
      });
    }));

    const response = await axios.post(`/ui/user/${user}/answers`, answers);
    return response.data;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userAdded: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
    updateUserSkill: (state, action) => {
      const { idEcosystem, skill } = action.payload;
      const index = state.value.ecosystems[idEcosystem].skills.findIndex(
        s => s.id === skill.id,
      );
      state.value.ecosystems[idEcosystem].skills[index] = index !== -1 && skill;
      index === -1 && state.value.ecosystems[idEcosystem].skills.push(skill);
    },
    resetSkills: state => {
      state.value = [];
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAnswersByUserAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchAnswersByUserAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.value = action.payload;
      })
      .addCase(fetchUpdatedUserAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUpdatedUserAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.value = action.payload;
      });
  },
});

export const { userAdded, updateEcosystem, updateSkill, updateUserSkill, resetSkills } = userSlice.actions;

// Selectors
export const selectUserData = state => state.user.value;
export const selectSkillsWithLevel = id => state => state.user?.value?.ecosystems?.[id]?.skills || [];
export const selectEcosystemPerId = id => state => state.user?.value?.ecosystems?.[id];

export default userSlice.reducer;
