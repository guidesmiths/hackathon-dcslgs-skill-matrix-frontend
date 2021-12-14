const getApiRoutes = servicesAPI => ({
  skills: {
    fetchSkills: servicesAPI.skills.fetchSkills,
    insertSkill: servicesAPI.skills.insertSkill,
    deleteSkill: servicesAPI.skills.deleteSkill,
  },
  answers: {
    fetchAnswers: servicesAPI.answers.fetchAnswers,
    fetchAnswersByUser: servicesAPI.answers.fetchAnswersByUser,
    insertAnswers: servicesAPI.answers.insertAnswers,
  },
  users: {
    fetchUpdatedUser: servicesAPI.users.fetchUpdatedUser,
    fetchUserInfo: servicesAPI.users.fetchUserInfo,
    insertUser: servicesAPI.users.insertUser,
    changeUserRole: servicesAPI.users.changeUserRole,
    changeUserCountry: servicesAPI.users.changeUserCountry,
    skillLevel: servicesAPI.users.skillLevel,
  },
  ecosystems: {
    fetchEcosystems: servicesAPI.ecosystems.fetchEcosystems,
    insertEcosystem: servicesAPI.ecosystems.insertEcosystem,
    deleteEcosystem: servicesAPI.ecosystems.deleteEcosystem,
    updateEcosystemName: servicesAPI.ecosystems.updateEcosystemName,
  },
  suggestions: {
    fetchSuggestions: servicesAPI.suggestions.fetchSuggestions,
    insertSuggestion: servicesAPI.suggestions.insertSuggestion,
    deleteSuggestion: servicesAPI.suggestions.deleteSuggestion,
  },
});

module.exports = getApiRoutes;
