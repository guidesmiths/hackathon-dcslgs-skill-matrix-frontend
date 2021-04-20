module.exports = () => {
  const start = ({ app, controller }, cb) => {
    app.get('/ui/skills', (req, res) => controller.skills
      .fetchSkills()
      .then(({ data }) => res.json(data)));

    cb();
  };
  return { start };
};
