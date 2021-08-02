/* eslint-disable no-unused-vars */
module.exports = () => {
  const start = ({ app, controller }, cb) => {
    app.get('/ui/suggestions', (req, res) => ({}));

    app.delete('/ui/suggestions', (req, res) => ({}));

    cb();
  };
  return { start };
};
