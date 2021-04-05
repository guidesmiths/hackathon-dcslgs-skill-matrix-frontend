const { join } = require('path');

const root = join(__dirname, '..', '..');

module.exports = () => {
  const start = ({ app, config }, cb) => {
    app.get('/*', (req, res) => {
      if (config.environment && process.env.NODE_ENV === 'production') {
        return res.render('index', {
          title: config.title,
        });
      }
      return res.sendFile(join(root, 'frontend', 'build', 'index.html'));
    });

    cb();
  };
  return { start };
};
