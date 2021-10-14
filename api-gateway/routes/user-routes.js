/* eslint-disable no-unused-vars */
module.exports = () => {
  const start = ({ app, controller }, cb) => {
    app.post('/ui/users/:id/answers', (req, res) => ({}));
    cb();
  };
  return { start };
};
