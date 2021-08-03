module.exports = () => {
  const start = ({ app, controller }, cb) => {
    app.get('/ui/ecosystems', (req, res) => controller.ecosystems.fetchEcosystems().then(({ data }) => res.json(data)));

    cb();
  };
  return { start };
};
