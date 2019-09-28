const { config } = require('../../config/index');

function withErroStack(err, stack) {
  if (config.dev) {
    return {
      err,
      stack
    };
  }
  return err;
}

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function errorHandler(err, req, res, next) { // eslint-disable-line
  res.status(err.status || 500);
  res.json(withErroStack(err.message, err.stack));
}

module.exports = {
  logErrors,
  errorHandler
};
