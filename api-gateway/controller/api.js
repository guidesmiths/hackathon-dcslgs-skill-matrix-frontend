const getApiRoutes = servicesAPI => ({
  skills: {
    fetchSkills: servicesAPI.skills.fetchSkills,
  },
  answers: {
    fetchAnswers: servicesAPI.answers.fetchAnswers,
  },
  user: {
    fetchUser: servicesAPI.answers.fetchUser,
  },
});

module.exports = getApiRoutes;
