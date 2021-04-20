const System = require('systemic');
const controller = require('./initController');

module.exports = new System({ name: 'controller' })
  .add('controller', controller())
  .dependsOn('config');
