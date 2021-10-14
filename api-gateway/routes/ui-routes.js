const { join } = require('path');

const root = join(__dirname, '..', '..');

module.exports = () => {
  const start = ({ app }, cb) => {
    app.get('/*', (req, res) => res.sendFile(join(root, 'frontend', 'build', 'index.html')));

    cb();
  };
  return { start };
};
