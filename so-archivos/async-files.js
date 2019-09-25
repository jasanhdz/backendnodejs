const fs = require('fs');

const file = process.argv[2];

if (!file) {
  throw new Error('Debes indicar el archivo que quieres leer');
}
// Como primer parametro recibe el archivo y como segundo parametro recibe el callback
// un callback es error first callback
const content = fs.readFile(file, (err, content) => {
  if (err) {
    console.log(err);
  }
  const lines = content.toString().split('\n').length;
  console.log(lines);
})

