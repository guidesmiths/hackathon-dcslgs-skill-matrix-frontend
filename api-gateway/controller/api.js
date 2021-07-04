const getApiRoutes = servicesAPI => ({
  skills: {
    fetchSkills: servicesAPI.skills.fetchSkills,
  },
  answers: {
    fetchAnswers: servicesAPI.answers.fetchAnswers,
    fetchFilteredAnswers: servicesAPI.answers.fetchFilteredAnswers,
  },
  user: {
    fetchUser: servicesAPI.user.fetchUser,
  },
  ecosystems: {
    fetchEcosystems: servicesAPI.ecosystems.fetchEcosystems,
  },
});

module.exports = getApiRoutes;
