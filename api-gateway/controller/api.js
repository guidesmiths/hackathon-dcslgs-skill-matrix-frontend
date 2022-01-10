const getApiRoutes = servicesAPI => ({
  skills: {
    fetchSkills: servicesAPI.skills.fetchSkills,
    upsertSkill: servicesAPI.skills.upsertSkill,
    deleteSkill: servicesAPI.skills.deleteSkill,
  },
  answers: {
    fetchUsersFiltered: servicesAPI.answers.fetchUsersFiltered,
    fetchAnswersByUser: servicesAPI.answers.fetchAnswersByUser,
    fetchAnswersByUserAndEcosystem: servicesAPI.answers.fetchAnswersByUserAndEcosystem,
    insertAnswers: servicesAPI.answers.insertAnswers,
  },
  users: {
    fetchUpdatedUser: servicesAPI.users.fetchUpdatedUser,
    fetchUserInfo: servicesAPI.users.fetchUserInfo,
    insertUser: servicesAPI.users.insertUser,
    changeUserRole: servicesAPI.users.changeUserRole,
    changeUserCountry: servicesAPI.users.changeUserCountry,
    fetchLevelUserBySkill: servicesAPI.users.fetchLevelUserBySkill,
  },
  ecosystems: {
    fetchEcosystems: servicesAPI.ecosystems.fetchEcosystems,
    fetchSkillsByEcosystemId: servicesAPI.ecosystems.fetchSkillsByEcosystemId,
    upsertEcosystem: servicesAPI.ecosystems.upsertEcosystem,
    deleteEcosystem: servicesAPI.ecosystems.deleteEcosystem,
  },
  suggestions: {
    fetchSuggestions: servicesAPI.suggestions.fetchSuggestions,
    insertSuggestion: servicesAPI.suggestions.insertSuggestion,
    deleteSuggestion: servicesAPI.suggestions.deleteSuggestion,
  },
});

module.exports = getApiRoutes;
