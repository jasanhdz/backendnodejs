const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  fs.readFile("./big", (error, data) => {
    if (error) {
      console.log('Erro:', error);
    }

    res.end(data);
  })
})

server.listen(3000);
