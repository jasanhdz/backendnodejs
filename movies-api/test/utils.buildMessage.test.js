// nos permite verificar si el test es correcto o no.
const assert = require('assert');

const buildMessage = require('../utils/buildMessage');

// vamos a definir en nuestros test que cuando enviemos cierto mensaje obtengamos cierta respuesta.L0
describe.only('utils - buildMessage', function () {
  describe('When recieves an entity and acction', function () {
    it('should return the respective message', function () {
      const result = buildMessage('movie', 'create');
      const expect = "movie created";
      assert.strictEqual(result, expect);
    });
  });

  describe('when recives an entity and an action and is a list', function () {
    it('should return the respective message with the entity in plural', function () {
      const result = buildMessage('movie', 'list');
      const expect = 'movies listed';
      assert.strictEqual(result, expect);
    });
  });
});