/* eslint-disable no-unused-vars */
module.exports = () => {
  const start = ({ app, controller }, cb) => {
    app.get('/ui/users/:id/answers', (req, res) => ({}));
    app.post('/ui/users/:id/answers', (req, res) => ({}));
    cb();
  };
  return { start };
};
