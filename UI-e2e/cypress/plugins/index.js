/* eslint-disable no-param-reassign */
require('dotenv').config();
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  const runningCI = !!process.env.CI;
  if (runningCI) {
    // eslint-disable-next-line
    require('@cypress/code-coverage/task')(on, config);
  }

  return config;
};
