const answers = require('./mocks/answers.json');
/* eslint-disable no-unused-vars */
module.exports = () => {
  const start = ({ app, controller }, cb) => {
    app.get('/ui/answers', (req, res) => res.json(answers));

    app.post('/ui/answers', (req, res) => ({}));

    cb();
  };
  return { start };
};
