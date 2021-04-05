const System = require('systemic');
const { join } = require('path');

module.exports = () => new System({ name: 'gs-skill-matrix-frontend' })
  .bootstrap(join(__dirname, 'api-gateway'));
