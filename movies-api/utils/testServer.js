const express = require('express');
const supertest = require('supertest');

// va a recibir una ruta
function testServer(route) {
// creamos una nueva app
  const app = express();
  // ha está app le vamos a pasar la ruta.
  route(app);
  // retornamos supertest y envolvemos nuestra app.
  return supertest(app);
}

module.exports = testServer;