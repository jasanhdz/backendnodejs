const sinon = require('sinon');

const { moviesMock, filteredMoviesMock } = require('./movies');

const getAllStub = sinon.stub();
/**
 * uno de los métodos que tienen los structs es por ejemplo decidir
 *  que cuando se llamé con ciertos argumentos resuelva con cierta respuesta, 
 * en esté caso vamos a decir que cuando lo llamé con movies que sería la collection que 
 * le va a pasar el servicio a la librería de mongo, pues resuelva con nuestros mocks de las peliculas
 */
getAllStub.withArgs('movies').resolves(moviesMock);

// También le vamos a deicr que cuando lo llame con movies y con un query
const tagQuery = { tags: { $in: ["Drama"] } };
getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMock('Drama'));

const createStub = sinon.stub().resolves(moviesMock[0].id);
// Finalmente cuando se llamé la funcion create de nuestro servicio, queremos  que lo resuelva
// con la primer movie de nuestros mocks, recuerden que en esté caso mongo devuelve el id
// no la movie completa.

// Ahora ya podemos crear nuestra clase MongoLibMock, en ella va a tener el getAll
// 

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  create(collection, data) {
    return createStub(collection, data)
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock
}