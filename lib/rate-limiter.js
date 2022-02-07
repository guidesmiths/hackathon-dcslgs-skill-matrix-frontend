const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 30,
  message: 'Too many requests created from this IP, please try again after 5 minutes',
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = {
  limiter,
};
