module.exports = () => {
  const start = ({ app, controller }, cb) => {
    app.get('/ui/ecosystems/answers', (req, res) => controller.ecosystems
      .fetchEcosystems()
      .then(({ data }) => res.json(data)));

    cb();
  };
  return { start };
};
