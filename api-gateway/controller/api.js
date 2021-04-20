const getApiRoutes = servicesAPI => ({
  skills: {
    fetchSkills: servicesAPI.skills.fetchSkills,
  },
});

module.exports = getApiRoutes;
