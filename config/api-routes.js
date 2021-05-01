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
  },
};
