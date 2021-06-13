module.exports = () => {
  const start = ({ app, controller }, cb) => {
    app.get('/ui/users/:id/answers', (req, res) => controller.user
      .fetchUser()
      .then(({ data }) => res.json(data)));

    cb();
  };
  return { start };
};
