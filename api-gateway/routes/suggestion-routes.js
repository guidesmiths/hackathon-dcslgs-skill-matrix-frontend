const suggestions = require('./mocks/suggestions.json');
/* eslint-disable no-unused-vars */
module.exports = () => {
  const start = ({ app, controller }, cb) => {
    app.get('/ui/suggestions', (req, res) => res.json(suggestions));

    app.delete('/ui/suggestions', (req, res) => ({}));

    cb();
  };
  return { start };
};
