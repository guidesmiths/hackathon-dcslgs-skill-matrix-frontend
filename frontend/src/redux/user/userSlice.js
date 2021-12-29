/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import callMsGraph from '../../configuration/msal';

function config() {
  return { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
}

const initialState = {
  value: {},
  skillsSelected: [],
  status: 'idle',
  insertStatus: 'idle',
};

export const fetchAnswersByUserAndEcosystemAsync = createAsyncThunk('users/fetchAnswersByUserAndEcosystem', async ({ userId, ecoId }) => {
  const response = await axios.get(`/ui/user/${userId}/ecosystem/${ecoId}/answers`, config());
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
      country: country?.trim(),
    };
    const adminList = [
      'victor.perez@dcsl.com', 'carlos.esquivel@dcsl.com', 'marina.davila@dcsl.com',
      'joseantonio.dorado@dcsl.com', 'iria.mavji@dcsl.com', 'alexis.shirtliff@dcsl.com',
      'andrew.ellingford@dcsl.com', 'adam.bell@dcsl.com', 'william.welsh@dcsl.com',
      'glen.docherty@dcsl.com', 'will.faulkner@dcsl.com', 'mary.jefferies@dcsl.com',
      'nick.thompson@dcsl.com',
    ];
    if (adminList.find(admin => admin === user.email)) {
      user.role = 'admin';
    }
    const res = await axios.post('/ui/user', user);
    localStorage.setItem('token', res.data);
    return response;
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
  'users/skillLevel',
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
      .addCase(fetchAnswersByUserAndEcosystemAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchAnswersByUserAndEcosystemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(fetchUpdatedUserAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUpdatedUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(fetchUserInfoAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUserInfoAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(insertUserAsync.pending, state => {
        state.insertStatus = 'loading';
      })
      .addCase(insertUserAsync.fulfilled, (state, action) => {
        state.insertStatus = 'idle';
        state.value = action.payload;
      })
      .addCase(insertUserAsync.rejected, state => {
        state.insertStatus = 'idle';
      })
      .addCase(changeUserRoleAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(changeUserRoleAsync.fulfilled, state => {
        state.status = 'idle';
      })
      .addCase(changeUserCountryAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(changeUserCountryAsync.fulfilled, state => {
        state.status = 'idle';
      })
      .addCase(fetchLevelUserBySkillAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchLevelUserBySkillAsync.fulfilled, state => {
        state.status = 'idle';
      });
  },
});

export const { userAdded, updateSkill, updateUserSkill } = userSlice.actions;

// Selectors
export const selectUserInsertLoading = state => state.users.insertStatus;
export const selectUserData = state => state.users?.value;
export const selectSkillsWithLevel = id => state => state.users?.value?.ecosystems?.find(ecosystem => ecosystem.id === id)?.skills || [];
export const selectEcosystemPerId = id => state => state.users?.value?.ecosystems?.find(ecosystem => ecosystem.id === id);

export default userSlice.reducer;
