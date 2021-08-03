module.exports = {
  api: {
    skills: {
      fetchSkills: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/skills/catalog`,
        method: 'get',
      },
    },
    answers: {
      fetchAnswers: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/answers`,
        method: 'get',
      },
      fetchFilteredAnswers: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/answers`,
        method: 'post',
      },
    },
    user: {
      fetchUser: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/users/:id/answers`,
        method: 'get',
      },
      fetchUpdatedUser: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/users/:id/answers`,
        method: 'post',
      },
    },
    ecosystems: {
      fetchEcosystems: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/ecosystems`,
        method: 'get',
      },
    },
    suggestions: {
      fetchSuggestions: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/suggestions`,
        method: 'get',
      },
      deleteSuggestion: {
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/suggestions`,
        method: 'delete',
      },
    },
  },
};
