const assert = require('assert');
// la usamos para requerir el servicio y remplazar la librería de mongo por nuestro mock.
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');

const { moviesMock } = require('../utils/mocks/movies');

describe("services - movies ", function () {
  const MoviesServices = proxyquire('../services/movies', {
    '../lib/mongo': MongoLibMock
  });

  const moviesService = new MoviesServices();
  // cundo se llame getMoviesMethods 
  describe("when getMovies method is called", async function () {
    it('should call the getAll MongoLib method', async function () {
      await moviesService.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    });

    it("should return an array of movies", async function () {
      const result = await moviesService.getMovies({});
      const expected = moviesMock;
      assert.deepEqual(result, expected);
    })
  });
});
