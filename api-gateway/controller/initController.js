const request = require('config-req');
const getApiRoutes = require('./api');

module.exports = () => {
  const start = async ({ config }) => {
    const servicesAPI = request(config.api);

    return {
      ...getApiRoutes(servicesAPI),
    };
  };

  return { start };
};
