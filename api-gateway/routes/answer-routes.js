/* eslint-disable no-unused-vars */
module.exports = () => {
  const start = ({ app, controller }, cb) => {
    app.get('/ui/answers', (req, res) => ({}));

    // controller.answers
    //   .fetchAnswers()
    //   .then(({ data }) => res.json(data)));

    cb();
  };
  return { start };
};
