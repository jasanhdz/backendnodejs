// Para devolver un error de Boom, requerimos boom
const boom = require('@hapi/boom');
const joi = require('@hapi/joi'); // eslint-disable-line

//* validate va a recibir la data que va a validar, y va a recibir un schema
function validate(data, schema) {
  // vamos a obtener un error en caso de que el schema no sea valido con la data
  // ANTIGUA IMPLEMENTACIÓN DE JOIN
  // const { error } = joi.validate(data, schema);

  // NUEVA IMPLEMENTACIÓN DE JOI ahora el schema valida la data
  const { error } = schema.validate(data, { errors: { stack: true } });
  return error;
}

function validationHandler(schema, check = "body") {
  return function (req, res, next) {
    const error = validate(req[check], schema);

    error ? next(boom.badRequest(error)) : next();
  }
}

module.exports = validationHandler;
