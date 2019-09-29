const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

const { logErrors, wrapErrors, errorHandler  } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

// middleware de bodyparser
app.use(express.json());

// routes
moviesApi(app);

// Catch 404
app.use(notFoundHandler);
// Los middlewares de error, siempre tienen que ir al final de las rutas, 
// las rutas también son middlewares
// **Menejadores de errores**
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


// Cuando hagamos un request a nuestra aplicación, nos imprima un hello world
app.get('/', (req, res) => {
  res.send("Hello world");
})

app.get('/json', (req, res) => {
  res.json({hello: 'world'});
})

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
})

