module.exports = {
  api: {
    skills: {
      fetchSkills: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/skills`,
        method: 'get',
      },
      insertSkill: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/skill`,
        method: 'post',
      },
      deleteSkill: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/skill/:id`,
        method: 'delete',
      },
    },
    answers: {
      fetchAnswers: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/answers`,
        method: 'post',
      },
      fetchAnswersByUser: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/user/:id/answers`,
        method: 'get',
      },
      insertAnswers: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/user/:id/answers`,
        method: 'post',
      },
    },
    users: {
      fetchUpdatedUser: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/users/:id/answers`,
        method: 'post',
      },
      fetchUserInfo: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/user/me`,
        method: 'get',
      },
      insertUser: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/user`,
        method: 'post',
      },
      changeUserRole: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/user/role`,
        method: 'put',
      },
      changeUserCountry: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/user/country`,
        method: 'patch',
      },
      skillLevel: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/user/skill/:skillId`,
        method: 'get',
      },
    },
    ecosystems: {
      fetchEcosystems: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/ecosystems`,
        method: 'get',
      },
      insertEcosystem: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/ecosystem`,
        method: 'post',
      },
      deleteEcosystem: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/ecosystem/:id`,
        method: 'delete',
      },
      updateEcosystemName: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/ecosystem/:id`,
        method: 'put',
      },
    },
    suggestions: {
      fetchSuggestions: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/suggestions`,
        method: 'get',
      },
      insertSuggestion: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/suggestion`,
        method: 'post',
      },
      deleteSuggestion: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/suggestion/:id`,
        method: 'delete',
      },
    },
  },
};
