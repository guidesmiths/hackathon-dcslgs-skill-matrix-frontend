/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

function config() {
  return { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
}

const initialState = {
  value: {},
  skillsSelected: [],
  status: 'idle',
  insertStatus: 'idle',
  count: null,
  countStatus: 'idle',
};

export const fetchAnswersByUserAndEcosystemAsync = createAsyncThunk('users/fetchAnswersByUserAndEcosystem', async ({ ecoId }) => {
  const response = await axios.get(`/ui/user/ecosystem/${ecoId}/answers`, config());
  return response.data;
});

export const fetchFilledSkillsCountAsync = createAsyncThunk('users/fetchFilledSkillsCount', async () => {
  const response = await axios.get('/ui/user/ecosystem/filledSkillsCount', config());
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
    return response.data;
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

export const signOutAsync = createAsyncThunk(
  'user/signOut',
  async () => {
    localStorage.clear();
  },
);

export const insertUserAsync = createAsyncThunk(
  'users/insertUser',
  async token => {
    const res = await axios.post('/ui/user', {
      token,
    });
    localStorage.setItem('token', res.data);
    const response = await axios.get('/ui/user/me', config());
    return response.data;
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
export const changeUserCountryAsync = createAsyncThunk(
  'users/changeUserCountry',
  async userData => {
    const response = await axios.patch('/ui/user/country',
      {
        id: userData.userId,
        country: userData.newCountry,
      }, config());
    return response.data;
  },
);

export const fetchLevelUserBySkillAsync = createAsyncThunk(
  'users/fetchLevelUserBySkill',
  async skillId => {
    const response = await axios.get(`/ui/user/skill/${skillId}`, config());
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
      const ecosystemIndex = state.value.ecosystems.findIndex(e => e.id === idEcosystem);
      const skillIndex = state.value.ecosystems[ecosystemIndex].skills.findIndex(s => s.id === skill.id);
      state.value.ecosystems[ecosystemIndex].skills[skillIndex] = skillIndex !== -1 && skill;
      skillIndex === -1 && state.value.ecosystems[idEcosystem].skills.push(skill);
    },
  },

  extraReducers: builder => {
    builder
      .addCase(signOutAsync.fulfilled, state => {
        state.insertStatus = 'idle';
        state.value = initialState.value;
        state.skillsSelected = initialState.skillsSelected;
        state.count = initialState.count;
      })
      .addCase(fetchAnswersByUserAndEcosystemAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchAnswersByUserAndEcosystemAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.value = action.payload;
      })
      .addCase(fetchFilledSkillsCountAsync.pending, state => {
        state.countStatus = 'loading';
      })
      .addCase(fetchFilledSkillsCountAsync.fulfilled, (state, action) => {
        state.countStatus = 'success';
        state.count = action.payload;
      })
      .addCase(fetchUpdatedUserAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUpdatedUserAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.value = action.payload;
      })
      .addCase(fetchUserInfoAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUserInfoAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.value = action.payload;
      })
      .addCase(fetchUserInfoAsync.rejected, state => {
        state.status = 'error';
      })
      .addCase(insertUserAsync.pending, state => {
        state.insertStatus = 'loading';
      })
      .addCase(insertUserAsync.fulfilled, (state, action) => {
        state.insertStatus = 'success';
        state.value = action.payload;
      })
      .addCase(insertUserAsync.rejected, state => {
        state.insertStatus = 'error';
      })
      .addCase(changeUserRoleAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(changeUserRoleAsync.fulfilled, state => {
        state.status = 'success';
      })
      .addCase(changeUserCountryAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(changeUserCountryAsync.fulfilled, state => {
        state.status = 'success';
      })
      .addCase(fetchLevelUserBySkillAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchLevelUserBySkillAsync.fulfilled, state => {
        state.status = 'success';
      })
      .addCase(insertAnswersAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(insertAnswersAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.value = action.payload;
      });
  },
});

export const { userAdded, updateSkill, updateUserSkill } = userSlice.actions;

// Selectors
export const selectUserInsertLoading = state => state.users?.insertStatus;
export const selectUserData = state => state.users?.value;
export const selectSkillsWithLevel = id => state => state.users?.value?.ecosystems?.find(ecosystem => ecosystem.id === id)?.skills || [];
export const selectEcosystemPerId = id => state => state.users?.value?.ecosystems?.find(ecosystem => ecosystem.id === id);
export const selectFilledSkillsStatus = state => state.users?.countStatus;
export const selectFilledSkillsCount = state => state.users?.count;

export default userSlice.reducer;
