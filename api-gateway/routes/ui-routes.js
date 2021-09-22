const { join } = require('path');

const root = join(__dirname, '..', '..');

module.exports = () => {
  const start = ({ app, config }, cb) => {
    app.get('/*', (req, res) => {
      return res.sendFile(join(root, 'frontend', 'build', 'index.html'));
    });

    cb();
  };
  return { start };
};
