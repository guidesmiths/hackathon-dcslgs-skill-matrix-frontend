const { join } = require('path');

const root = join(__dirname, '..', '..');

module.exports = () => {
  const start = ({ app, config, logger }, cb) => {
    logger.info(`environment ${config.environment} process env ${process.env.NODE_ENV}`);
    app.get('/*', (req, res) => {
      if (config.environment && process.env.NODE_ENV === 'production') {
        logger.info(`rendering view with environment ${config.environment}`);
        return res.render('index', {
          environment: config.environment,
        });
      }
      return res.sendFile(join(root, 'frontend', 'build', 'index.html'));
    });

    cb();
  };
  return { start };
};
