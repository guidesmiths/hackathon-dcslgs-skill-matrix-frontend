/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
  originalValue: [],
  skillsSelected: [],
  status: 'idle',
};

export const fetchUserAsync = createAsyncThunk('user/fetchUser', async () => {
  const response = await axios.get('/ui/users/:id/answers');
  return response.data;
});

export const fetchUpdatedUserAsync = createAsyncThunk(
  'user/fetchUpdatedUser',
  async answer => {
    const response = await axios.post('/ui/users/:id/answers', {
      id: answer.selectedUser.id,
      ecosystemID: answer.selectedEcosystem.id,
      skills: answer.userSkills,
    });
    console.log(response.data);
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
  },

  extraReducers: builder => {
    builder
      .addCase(fetchUserAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.value = action.payload;
        state.originalValue = action.payload;
      })
      .addCase(fetchUpdatedUserAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUpdatedUserAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.value = action.payload;
        state.originalValue = action.payload;
      });
  },
});

export const { userAdded, updateEcosystem, updateSkill, updateUserSkill } = userSlice.actions;

// Selectors
export const selectUserData = state => state.user.value;
export const selectSkillsWithLevel = id => state => state.user?.value?.ecosystems?.[id]?.skills || [];
export const selectEcosystemPerId = id => state => state.user?.value?.ecosystems?.[id];

export default userSlice.reducer;
