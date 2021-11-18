/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import callMsGraph from '../../configuration/msal';

function config() {
  return { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
}

const initialState = {
  value: [],
  skillsSelected: [],
  status: 'idle',
};

export const fetchAnswersByUserAsync = createAsyncThunk('users/fetchAnswersByUser', async user => {
  const response = await axios.get(`/ui/user/${user}/answers`, config());
  return response.data;
});

export const fetchUpdatedUserAsync = createAsyncThunk(
  'answers/fetchUpdatedUser',
  async user => {
    const response = await axios.post('/ui/users/:id/answers', user, config());
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

    const response = await axios.post(`/ui/user/${user}/answers`, answers, config());
  },
);

export const fetchUserInfoAsync = createAsyncThunk(
  'users/fetchUserInfo',
  async history => {
    const response = await axios.get('/ui/user/me', config())
      .catch(() => {
        localStorage.clear();
        history.push('/login');
      });
    return response.data;
  },
);

export const insertUserAsync = createAsyncThunk(
  'users/insertUser',
  async token => {
    const response = await callMsGraph(token);
    const { id, mail, displayName, jobTitle, country } = response;
    const user = {
      user_id: id,
      email: mail.toLowerCase(),
      name: displayName,
      seniority: jobTitle,
      country: country.trim(),
    };
    const res = await axios.post('/ui/user', user);
    localStorage.setItem('token', res.data);
    return res.data;
  },
);

export const changeUserRoleAsync = createAsyncThunk(
  'users/changeUserRole',
  async userData => {
    const response = await axios.put('/ui/user/role',
      {
        id: userData.userId,
        role: userData.newRole,
      }, config());
    return response.data;
  },
);

export const userSlice = createSlice({
  name: 'users',
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
      })
      .addCase(fetchUserInfoAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUserInfoAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.value = action.payload;
      })
      .addCase(insertUserAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(insertUserAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.value = action.payload;
      })
      .addCase(changeUserRoleAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(changeUserRoleAsync.fulfilled, (state, action) => {
        state.status = 'succeded';
      });
  },
});

export const { userAdded, updateEcosystem, updateSkill, updateUserSkill, resetSkills } = userSlice.actions;

// Selectors
export const selectUserData = state => state.users?.value;
export const selectSkillsWithLevel = id => state => state.users?.value?.ecosystems?.[id]?.skills || [];
export const selectEcosystemPerId = id => state => state.users?.value?.ecosystems?.[id];

export default userSlice.reducer;
