// leer cuales son los archivos que estan dentro de un directorio
const fs = require('fs');
// dirname: directorio actual
const files = fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.log(err);
  }
  console.log(files);
})