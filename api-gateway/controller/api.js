const getApiRoutes = servicesAPI => ({
  skills: {
    fetchSkills: servicesAPI.skills.fetchSkills,
  },
  answers: {
    fetchAnswers: servicesAPI.answers.fetchAnswers,
    fetchFilteredAnswers: servicesAPI.answers.fetchFilteredAnswers,
  },
  suggestions: {
    fetchSuggestions: servicesAPI.suggestions.fetchSuggestions,
    deleteSuggestion: servicesAPI.suggestions.deleteSuggestion,
  },
});

module.exports = getApiRoutes;
