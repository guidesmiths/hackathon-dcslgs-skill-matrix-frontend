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
        url: `${process.env.SKILL_MATRIX_BACKEND}/api/v1/ecosystems/answers`,
        method: 'get',
      },
    },
  },
};
