/* eslint-disable no-unused-vars */
module.exports = () => {
  const start = ({ app, controller }, cb) => {
    app.get('/ui/ecosystems', (req, res) => ({}));

    cb();
  };
  return { start };
};
