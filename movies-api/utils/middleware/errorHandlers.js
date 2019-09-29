const { config } = require('../../config/index');
const boom = require('@hapi/boom');

function withErroStack(err, stack) {
  if (config.dev) {
    return {
      ...err,
      stack
    };
  }
  return err;
}

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function wrapErrors(err, req, res, next) {
  // Es posible que el error que nos llegue no sea de tipo Boom,
  // nosotros queremos que apartir de ahi todos los errores tengan la estructura boom
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  // Si el error que estamos pasando por acá es de tipo boom, 
  // llamamos al siguiente middleware con el error
  next(err);
}

function errorHandler(err, req, res, next) { // eslint-disable-line
  // Apartir del error que ya va ha ser de tipo boom debemos sacar el output, 
  // es la manera como le da menejo boom y ahoi podemos sacar el status code del error y el payload
  const {
    output: { statusCode, payload }
  } = err;
  // ahora no necesitamos manejar error.status, sino simplemente statusCode
  res.status(statusCode);
  // acá en lugar de pasar el error message pasamos el payload  
  res.json(withErroStack(payload, err.stack));
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler
};
