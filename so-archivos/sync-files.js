const fs = require('fs');

/*Cuando usamos la manera asincrona es muy recomendable usar un bloque
try catch porque es la manera en que podemos capturar un error
*/

try {
  // leer mi archivo
  // Con process.argv 'argumentos en vector' es poder leer lo que nosotros pasamos por la terminal
  const file = process.argv[2];

  // leer nuestro contenido
  const content = fs.readFileSync(file).toString();

  const lines = content.split('\n').length;
  console.log(lines);
} catch (err) {
  console.log(err);
  console.log("Necesitas especificar el archivo que quieres leer");
}