/**
 * console.log por debajo trabaja con una utilidad llamada
 * util format:
 * 
 * %s: String
 * %n: Número
 * %j: json
 * 
 * Estos son pequeños placeholders para formatear nuestros datos
 */
// console.log("Un %s y un %s", "Perrito", "Gatito");

console.info("hello world");
console.warn("hello world");

console.assert(42 == "42");
console.assert(42 === "42");

// A diferencia del console.error , el trace nos inidica la linea donde esta ocurriendo
// el errory es mucho más especifico
console.trace("hello");

const util = require("util");
const debuglog = util.debuglog("foo");

debuglog("hello from foo");

// Para imprimir el debuglog tenemos que pasarle como valor el namespace a la variable de entorno

// NODE_DEBUG=foo node console.utils.js