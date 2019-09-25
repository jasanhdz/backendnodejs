const http = require('http');
const server = http.createServer();
// My firts server by Jasan Hernández :)
const Days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Viernes', 'Sabado', 'Domingo'];
const Months = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
  'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];
// El servidor funciona con eventos
server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url == "/send") {
    // Arreglo que guardara los chunks que le enviemos
    let body = [];
    req.on('data', chunk => {
      body.push(chunk);
      // Cuando terminamos de guardar nuestros datos hay un evento end
    })
      .on('end', () => {
      // Acá ya termino de recibir los chuks
        res.writeHead(200, { "Content-Type": "text-plain" });
        // En lugar de quemar la respuesta, responderemos con el cuerpo
        // Tenemos que parcear los datos que vienen de tipo Buffer
        body = Buffer.concat(body).toString();
        let result = body.split('/');
        let date = new Date(result[2], result[1] - 1, result[0]);
        let dateFormatt = `Naciste el día ${Days[date.getDay()]} 
        ${date.getDate()} de ${Months[date.getMonth()]} del año ${date.getFullYear()}`;

        res.end(dateFormatt);
    })
  } else {
    res.statusCode = 404;
    res.end('No Found');
  }
})

server.listen(8000);
console.log('Servidor en la url http://localhost:8000'); 