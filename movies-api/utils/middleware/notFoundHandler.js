const boom = require('@hapi/boom');

function notFoundHandler(req, res) { // eslint-disable-line
  const {
    output: { statusCode, payload }
  } = boom.notFound();

  res.status(statusCode).json(payload);
}

module.exports = notFoundHandler;