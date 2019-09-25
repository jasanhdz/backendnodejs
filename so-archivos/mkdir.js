// Creamos direcorios o carpetas.
const fs = require('fs');
fs.mkdir("ejemplo/documents/node", { recursive: true }, err => {
  if (err) {
    console.log(err);
  }
});

