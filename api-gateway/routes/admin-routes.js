const helmet = require('helmet');
const express = require('express');
const { join } = require('path');

const root = join(__dirname, '..', '..');

module.exports = () => {
  const start = async ({ manifest = {}, app, logger }) => {
    app.use(express.urlencoded());
    app.use(express.json());
    app.use(helmet({
      // This is neccesary because of helmet v4
      contentSecurityPolicy: {
        directives: {
          'default-src': 'self',
        },
      },
    }));
    logger.info(`path: ${join(root, 'frontend', 'build')}`);
    app.set('view engine', 'hbs');
    app.set('views', join(root, 'frontend', 'build'));
    app.use(express.static(join(root, 'frontend', 'build')));

    app.get('/__/manifest', (req, res) => res.json(manifest));

    return Promise.resolve();
  };

  return { start };
};
