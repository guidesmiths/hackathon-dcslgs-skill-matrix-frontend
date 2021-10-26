const debug = require('debug')('lib');

const defaultLogger = () => ({
  error: err => debug(err),
});

const getErrorStatusCode = response => (response && response.status ? response.status : 500);
const getErrorMessage = response => (response && response.data && response.data.message
  ? response.data.message : '');
const getErrorExtra = response => (response && response.data && response.data.extra
  ? response.data.extra : '');

const handleError = (res, logger = defaultLogger) => error => {
  const statusCode = getErrorStatusCode(error.response);
  const errorMessage = error.response ? getErrorMessage(error.response) : error.message;
  const errorExtra = getErrorExtra(error.response);

  logger.error(`${errorMessage} - ${error.stack}`);
  logger.error(errorExtra);
  res.status(statusCode)
    .json({ type: error.name, message: errorMessage, extra: errorExtra });
};

module.exports = { handleError };
