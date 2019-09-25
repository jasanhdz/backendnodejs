const os = require('os');

// método para conocer los cpus de nuestra maquina
console.log("CPU info", os.cpus());
// Conocer la ip de nuestra máquina.
// console.log("IP addrees", os.networkInterfaces().lo.map(i => i.address));

// Conocer la memoria libre de nuestro sistema
console.log("Free memory", os.freemem());

// Conocer tipo de sistema operativo tenemos
console.log("Type ", os.type());

// Conocer la versión
console.log("SO version", os.release());

// Imprimir la dirección del usuario
console.log("Usr info", os.userInfo());