const http = require('http');
const server = http.createServer();

// El servidor funciona con eventos
server.on('request', (request, response) => {
  // request: lo que llegá del request
  // response: lo que le vamos a responder al cliente
  response.statusCode = '200';
  response.setHeader('Content-Type', 'text-plain');

  response.end('hellow world\n')
});

server.listen(9000);
console.log('Servidor en la url http://localhost:9000');