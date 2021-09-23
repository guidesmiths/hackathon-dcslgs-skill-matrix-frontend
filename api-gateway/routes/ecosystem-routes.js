const ecosystems = require('./mocks/ecosystems.json');
/* eslint-disable no-unused-vars */
module.exports = () => {
  const start = ({ app, controller }, cb) => {
    app.get('/ui/ecosystems', (req, res) => res.json(ecosystems));

    cb();
  };
  return { start };
};
