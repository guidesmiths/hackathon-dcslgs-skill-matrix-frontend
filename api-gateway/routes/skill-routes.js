/* eslint-disable no-unused-vars */
module.exports = () => {
  const start = ({ app, controller }, cb) => {
    app.get('/ui/skills/catalog', (req, res) => ({}));

    // controller.skills
    //   .fetchSkills()
    //   .then(({ data }) => res.json(data)));

    cb();
  };
  return { start };
};
