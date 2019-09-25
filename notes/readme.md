# Node

## ¿Qué es Node.js y para que sirve?

La definición formal de nodejs es: un entorno de ejecución para javascript construido con el motor v8.
**El entorno de ejecucíon:** es la capa que corre por el sistema operativo que ejecuta software, básicamente se ecnarga de como se consume memoria, como acceder a las variables y como corre el [garbage collector](https://es.wikipedia.org/wiki/Recolector_de_basura).

[V8]() Es un engine de Javascript por de chromiund-project para chrome y chromium. Además de chrome existen 2 proyectos que son chromium que es la versión open source y luego chrome canary, chrome canary se llamá así por una analogía donde antiguamente los mineros iban a la mina y para detectar si habia gases o algún peligro, ponían a un canario en una pequeña jaula, si había un gas y pasaba algo, el canario lasimosamente moría y es la manera en como se daban cuenta si había algún error, lo mismo pasa con chrome canary, es la manera como detectan errores y si todo sale bien, lo pasan a chrome.

Chrome V8 lo que hace es compilar javascript a código máquina. Recordemos que los lenguajes interpretados se ejecutan muy rápido, pero cuando hay un loop de código muy seguido se demoran, porque cada vez que pasan por esa linea de código tienen que volverla a interpretar a diferencia de los lenguajes compilados que se demoran mucho en cargar, porque tienen que pasar precismanete por ese proceso de compilación, luego se ejecutan muy rápido porque compilan esa linea, por eso cada vez que vuelven a pasar por ese loop, ya esta perfectamente compilado.

Javascript solía ser interpretado y ahora es compilado con una tecnologia llamada **Just in time compiler** ó [compilación en tiempo de ejecución](https://es.wikipedia.org/wiki/Compilaci%C3%B3n_en_tiempo_de_ejecuci%C3%B3n), está tecnología lo que tiene es un monitor que se encarga de revizar cada cuanto se ejecuta nuestro código, si el código se ejecuta mucho pone un estado warm y lo que hace es que ese código lo compila, si ese código compilado se ejecuta muchas veces, lo coloca en un estado HOT y es básicamente es hacerle una optimización a ese compilado, para que cuando se llame, ya llame a la versión optimizada.

Nodejs fue tomar el engine de JS chrome V8 para crear un entorno de ejecución y poder usar javascript del lado del servidor, recordemos que tenemos otros engine de JS como: [spiderMonkey]() [JavascriptCore]() [Chakra](). Pero como recientemente van a renovar la versión de Each van a empezar a implementar el motor V8 como Js engine.

## Fechas importantes de NodeJS

En 2009 por primera vez [Ryan Dahl](https://en.wikipedia.org/wiki/Ryan_Dahl) mostró al mundo nodejs.
En 2011 por primera vez Linkenlin usa nodejs en producción.
En 2013 se saca Gust que es una Plataforma de plugin.
A la vez Paypal saca un framework de nodejs llamado [Krakenjs](https://github.com/krakenjs/kraken-js)
En 2015 sale la competencia de nodejs llamada IOJS, pero afortunadamente se reconcilian y crean lo que hoy es [La Nodejs foundation](https://foundation.nodejs.org/).
En 2017 Nodejs Se vuelve Messing con un 8.8 millones de instancias funcionando.

## Diferencias entre NodeJs y Javascript

En Javascript tenemos el [DOM document object model]() es la interfaz que nos permite interpretar el documento html en javascript como lo es el objeto window, también tenemos el [CSSDOM]() que es la interfaz que nos permite manipular el css en javascript, por otro lado tenemos el [FetchAPI]() que por el cual podemos hacer request y que nos devuelva una promesa, también tenemos toda la capa de webstorage que consiste en el [sessionStorage] y el [localStorage] que eso no existe en nodejs, tenemos el modulo de canvas API que nos permite hacer gráficos en la web en 2D y 3D y apartir de ahi tenemos una seríe de APIS como lo son: el BluttudAPI, AudioAPI, webAutenthicationAPI.

Por otro lado en Nodejs tenemos una serie de modulos:
- Http: permite crear servidores 
- Sistema operativo: nos permite comunicarnos entre el sistema operativo y darnos información sobre el.
- Utilidades: que son una serie de utilidades excusivas para nodejs
- Debugger: una manera en la que podemos hacer debuggin con nodejs.
- Streams: nos permiten manejar grandes colecciones de datos-
- Eventos: podemos definir acciones y disparar más adelante 
- Ecmascript Modules: se pueden ejecutar en nodejs mediante un feature flag
- Consola: es muy similar a la del navegador

## Instalación de Node.js

Para instalar Node.js tienes que dirigirte [a](https://nodejs.org/es/) y elegir entre la ultima versión o la version LTS.

Por defecto Node.js detecta tu sistema operativo y descarga el archivo indicado para la instalación, si no es tu caso puedes dirigirte al enlace de otras [descargas](https://nodejs.org/es/download/.)

## Arquitectura orientada a eventos

Uno de los paradigmas de programación en nodejs más populares es la arquitectura orientada a eventos, los eventos nos permiten manipular el código asincrono de una mejor manera. Respasemos algunos ejemplos de callback

Concepto Error First Callback: cuando un callback tiene un error lo que vamos a enviar como primer párametro es el error.

Usando Callback
```js
const asyncCallback = function (cb) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      // Concepto Error First Callback: 
      return cb(null, 'Hola mundo');
    } else {
      cb(new Error('Hello Error'));
    }
  }, 2000)
}

asyncCallback((err, msg) => {
  // Verificar si existe el error
  if (err) {
    console.log('Error', err);
  } else {
    console.log('mensage', msg);
  }
})
```

Usando Promesas:
```js
// resolve: se encarga de resolver la promesa
// reject: se encarga de enviar un error en caso de que algo suceda
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      // Concepto Error First Callback: 
      // En lugar de retornar un callback podemos llamar a Resolve
      // Como resolve ya no es Callback y ya no es Error First Callback, 
      //ya no hay necesidad de pasar Objeto null
      resolve('Hola mundo');
    } else {
      reject(new Error('Hello Error'));
    }
  }, 2000)
});

// Lo bueno de las promesas es que se pueden encadenar  
// Encadenamos el mensage para que antes de mostrarlo, se muestre en UpperCase
promise.then(msg => msg.toUpperCase())
  .then(msg => console.log('message', msg))
  .catch(err => console.log('Error', err));
```

Aún hay una mejor manera de hacer estó, lo importante de las promesas es que esto se empieza a generar un código en cascada que es dificil de leer con el tiempo, ahora recientemente se puede usar **async await** que es una manera de escribir código asincrono que se vea sincrono.

Lo que requiere async await es que nuestra función devuelva una promesa, que es como una serie de wrapper que hacemos, en esté caso nosotros vamos a convertir esa promesa en una función:

```js
const promiseFunction = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve('Hola mundo');
    } else {
      reject(new Error('Hello Error'));
    }
  }, 2000)
});

async function asyncAwait() {
  try {
    const msg = await promiseFunction();
    console.log('message', msg);
  } catch (error) {
    console.log('error', error);
  }
}

asyncAwait();
```

## Event Emiter

Hay una forma aún más poderosa de ejecutar el código anterior y es con la clase event-emitter. EventEmitter no es exclusivo, podemos usar promesas y código asincrono, pero ya vamos a ver cuales son sus ventajas:

```js
// Creamos un Event Emitter
const EventEmitter = require('events');

// Podemos crear un logger propio
class Logger extends EventEmitter {
  // Método execute recibe un callback
  execute(cb) {
    console.log('Before');
    // Emitimos un Evento 
    this.emit('start');
    cb();
    // Emitimos otro evento
    this.emit('finish');
    console.log('Afther');
  }
}

const logger = new Logger();

// Cada vez que ocurra algún evento, hagá algo
logger.on('start', () => console.log('STARTING'));
// Podemos Suscribirnos al evento multiples veces sin niguna restricción 
logger.on('finish', () => console.log('Finishing'));

logger.on('finish', () => console.log("It's Done"));

// logger.execute(() => console.log("Hello World"));

/*
Algo muy importante es que si ejecutamos código asincrono, como un setTimeout,
el orden no va ha permanecer, porque como es código asincrono precisamente se va 
ha ejecutar despues de todas las emisiones, en ese caso la manera de controlarlo es
usando callbacks, si lo ejecutamos veremos que nuestro hello world se ejecuta despues,
porque queda de manera asincrona.
*/
logger.execute(() => setTimeout(() => console.log("Hello World"), 500));
```

## Primer Servidor

En esta ocación tenemos que leer codígo e interpratar lo que se esta haciendo:

```js
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
```

Segundo Servidor que usa el evento POST para recibir datos e imprimirlos tal cúal:

```js
const http = require('http');
const server = http.createServer();

// El servidor funciona con eventos
// request: lo que llegá del request
// response: lo que le vamos a responder al cliente
// El Objeto request es un RewriteString
// Los strings heredan de los event Evimetter -> es decir también tiene eventos
server.on('request', (request, response) => {
  if (request.method === 'POST' && request.url == '/echo') {
    let body = [];
    request.on('data', chunk => {
      body.push(chunk);
    })  // Caundo recibe nuestros datos, hay un evento end 
      .on('end', () => {
      // Acá ya termino de recibir nuestros datos
      response.writeHead(200, { "Content-Type": "text-plain"});
      // En lugar de quemar la respuesta, responderemos con el cuerpo
        /* El string chunk tiene los datos de tipo buffer y lo que hay que hacer para que sea un string
          para que sea una cadena de texto en un string podemos usar la utilidad Buffer
        */
        body = Buffer.concat(body).toString();
      response.end(body)
    })
  } else {
    response.statusCode = 404;
    response.end();
  }

});

server.listen(9001);
console.log('Servidor en la url http://localhost:9001'); 
```

Servidor que recibe tu fecha de cunpleaños y devuelve el dia de la semana que nacieron:

```js
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
```

## Sreams 

Introducción:

Es una colección de datos tal como lo son los array y las cadenas de texto, solo que en vez, solo que en lugar de estar en su totalidad, se van manejando pedazo por pedazo, esto hace que los streams sean verdaderamente poderosos, porque podemos manejar gran cantidad de datos.

## Readable y Writable Streams

Los readable streams y writable streams tienen eventos y funciones, tienen eventos porque como bien sabemos heredan de la clase event emitter.

Readable
Eventos más comunes
- data: Se dispara cuando recibe datos.
- end. Se dispara cuando termina de recibir datos.
- error. Se dispara cuando hay un error.

Las funciones más comunes son:
- pipe
- unpipe
- read
- push

Writable 
Eventos más comunes:
- drain. Se dispara cuando emite datos.
- finish. Se dispara cuando termina de emitir.
- error. Se dispara cuando hay un error.

Las funciones más comunes son:
- write
- end

Recuerda que tienen estos eventos porque los heredan de la clase **EventEmitter**.

Writable straeams

```js
const { Writable } = require('stream');

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});

process.stdin.pipe(writableStream);
```

Readable streams
```js
const { Readable } = require('stream');
const readableStream = new Readable();

readableStream.push(`${0 / 0}`.repeat(10).concat("Batman, Batman!"));
readableStream.push(null);

readableStream.pipe(process.stdout)
```

Readable streams on demand
```js
const { Readable } = require('stream');
const readableStream = new Readable({
  read(size) {
    setTimeout(() => {
      if (this.currentCharCode > 90) {
        this.push(null);
        return;
      }
      this.push(String.fromCharCode(this.currentCharCode++));
    }, 200)
  }
});

readableStream.currentCharCode = 65; 
readableStream.pipe(process.stdout)
```

## Duplex y Transforms streams

Ambos sirven para simplificar nuestro código:

- Duplex: implementa los métodos write y read a la vez.
- Transform: es similar a Duplex pero con una sintaxis más corta.

Duplex
```js
const { Duplex } = require('stream');

const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
  read(size) {
    setTimeout(() => { 
      if (this.currentCharCode > 90) {
        this.push(null);
        return;
      }
  
      this.push(String.fromCharCode(this.currentCharCode++));
    }, 200);
  }
});

duplexStream.currentCharCode = 65;
process.stdin.pipe(duplexStream).pipe(process.stdout);
```

Transform
```js
const { Transform } = require('stream');

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

const transformStreamCamelCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(
      chunk
        .toString()
        .toLowerCase()
        .split(' ')
        .map((e, index) => index > 0 ? e.charAt(0).toUpperCase() + e.substring(1) : e)
        .join('')
    );
    callback();
  }
});

process.stdin.pipe(transformStreamCamelCase).pipe(process.stdout);
```

## Uso de utilidades que tiene NodeJS

## Sistema operativo y sistemas de archivos

Utilidades del sistema operativo

```js
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
```

Utilidades con el sistema de archivos

En node las utilidades la mayoria pueden funcionar de manera sincrona y asincrona, de manera sincrona, quiere decir que el va a esperar a hasta que se ejecuta ese proceso y hasta que no de una respuesta no va a continuar con la siguiente linea.

En node cuando se ejecuta de manera sincrona necesitamos usar callbacks porque es la manera en la que el sabe cuando ya terminamos, ejecute mi código que quiero procesar despues de que hizo todo lo que tenia que hacer esté modulo

Usando la **readFileSync** que lee los datos de manera sincrona.

```js
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
```

Vamos a hacer lo mismo de manera asincrona, pero esta vez no tenemos que especificar que es *readFileSync* sino que es simplemente **readFile**, porque por defecto Nodejs trata de ser asincrono.

```js
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
```

El modulo file system no solo nos permite leer archivos sino que en el también podemos crear carpetas, leer directorios, crear archivos, eliminar archivos, etc. Es todo lo que un usuario puede hacer con archivos y carpetas.

También podemos visitar la documentación de Nodejs 12.0 sobre [FileSystem]()

## Administrar directorios y archivos

Leer el nombre de los archivos que estan dentro de un directorio

```js
// leer cuales son los archivos que estan dentro de un directorio
const fs = require('fs');
// dirname: directorio actual
const files = fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.log(err);
  }
  console.log(files);
})
```

Creamos directorios o carpetas con mkdir desde node

```js
// Creamos direcorios o carpetas.
const fs = require('fs');
fs.mkdir("ejemplo/documents/node", { recursive: true }, err => {
  if (err) {
    console.log(err);
  }
});
```

Copiar archivos con Nodejs

```js
const fs = require('fs');

// Primer parametro el archivo que queremos copiar
// Segundo parametro el archivo que queremos crear
fs.copyFile("naranja.txt", "limon.txt", err => {
  if (err) {
    console.log(err);
  }
  console.log("naranja.txt fue copiado como limon.txt");
})
```

## Consola, utilidades y debuggin

En nodejs tenemos la utilidad consola en ella podemos usar el console.info, console.log, console.error, estamos bastante familiarizados con esta utilidad sinn emabargo todo por defecto lo que imprimimos por consola se va por el **stdout** y todo lo que imprimimos en el console.error se va por el **stderror**. Mediante la clase consola que es diferente a la consola, podemos personalizarlo para decir que en vez se valla por el stdout o stderror, hagamos una cosa completamente diferente.

```js
// En lugar de usar una consola stdout o stderror
/* 
Usaremos el conocimiento de fileystem, para que cada vez que escriba o que imprimaa
El stdout nos quede un archivo de log.

Así mismo cada vez que usemos el stderror, creamos otro archivo log.
*/

const fs = require('fs');

// Cada vez que imprima en el stdout nos cree un archivo de log
const out = fs.createWriteStream("./out.log");
const err = fs.createWriteStream("./err.log");

/* creamos consola personalizada, la cual lo hacemos instanciando la Clase
Console la cual recibe 2 párametros, como primer parametro todo lo que le pasemos en el
console.log o console.info y como segundo párametro, todo lo que llamé con sonsole.error
*/
const consoleFile = new console.Console(out, err);

// Ejecutamos una función de intervalo cada 2 segundos
setInterval(() => {
  // Imprimimos una fecha en el console.log personalizado
  consoleFile.log(new Date());
  // Imprimimos un error en el console.error personalizado
  consoleFile.error(new Error("Ooops!"));
}, 2000)
```

No solo podemos jugar con la clase de la consola para crear nuestra consola personalizada, si no que también vamos a explorar diferentes utilidades de consola.

console.log por debajo trabaja con una utilidad llamada
  util format:
  
- %s: String
- %n: Número
- %j: json

Estos son pequeños placeholders para formatear nuestros datos.
``console.log("Un %s y un %s", "Perrito", "Gatito");``

Si accedemos a la consola de node exactamente esto hace la utilidad **util.format()** es decir la consola se alimenta del paquete util.format y funciona exactamente igual.

Node ocupa este paquete de utilidades para otros paquetes que el expone, pero nos deja la posibilidad de alimentarnos de estas utilidades, es decir si yo por alguna razón quiero hacer uso del util.format lo podemos hacer.

Alias de console.log:

- console.info

Alias de de console.error:
- console.wran

- console.assert: Si hay un error nos muestra que existe un error en un assert, en un booleano o verificación:

```js
console.assert(42 == "42");
console.assert(42 === 42);
```

- console.trace: nos inidica la linea donde esta ocurriendo el error que es mucho más especifico.

Una utilidad bastante interesante es una llamada de burlog, lo que tenemos que hacer obtener la utilidad, por la cual node nos la deja abierta para que la hagamos, e invocamos el debuglog, llamando **util.debuglog**. Esto es muy parecido a como funciona el paquete debug de express, pero nosotros básicamente lo que decimos es crear un debuggin.

Vamos a crear un nuevo debuggin  que va a exponer un namespace que va a ser _foo_ 
Nosotros podemos imprimir nuestro mensaje de debug "hello"y esto solo solo se imprime si pasamos la variable de entorno NODE_DEBUG con el namespace.

## Deprecate

Cuando hacemos util.deprecate hacemos un wrap de una función que ya está obsoleta y queremos hacer saber a nuestros usuarios que ya no deberia de usar, lo interesante de nuestra función deprecate es que nos permite imprimir un mensaje.

```js
const util = require("util");

const helloPluto = util.deprecate(() => {
  console.log("hello pluto");
}, 'pluto is deprecated. It is not a planet anymore');

helloPluto();
```

Esto es bastante util cuando nosotros estamos haciendo refactory y nosotros queremos hacerle saber al usuario que hay ciertas funcionalidades que quizas en una versión más adelante va a desaparecer por completo.

## Debuggin en node

Para hacer debuggin en node lo que debemos usar es el flag ``node --inspect`` y luego especificar al archivo que queremos hacer debuggin. En versiones anteriores de node es decir < 12, hacer uso de node debugg, genera un warning o deprecation warning que es exactamente igual al util-deprecate que aprendimos con anterioridad, esto quiero decir que en futuras versiones de node, esto va a desaparecer. Por lo que la recomendación es empezar a usar el node --inspect desde ahora.

Cuando hacemos el node inspect, el habre un puerto en el localhost:9229 especificado acá en nuestro navegador. Si nos damos cuenta es exactamente la utilidad debuggin que tiene js del lado del cliente.

## Clusters y procesos hijos

Una sola instancia de Node.js corre un solo hilo de ejecución. Para tomar ventaja de los sistemas con multiples core, necesitamos lanzar un cluster de procesos de Node.js para manejar la carga.

El módulo cluster nos permite la creación fácil de procesos hijos que comparten el mismo puerto del servidor. Veamos un ejemplo en código:

```js
const cluster = require("cluster");
const http = require("http");


// Requerimos la cantidad de CPUs que tiene la maquina actual
const numCPUs = require("os").cpus().length;


if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);


  // Si el cluster es maestro, creamos tantos procesos como numero de CPUS
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }


  // Si por alguna razón el cluster se finaliza hacemos un log
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Los diferentes workers pueden compartir la conexión TCP
  // En este caso es una servidor HTTP
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("hello world\n");
    })
    .listen(8000);


  console.log(`Worker ${process.pid} started`);
}
```

Si corremos nuestro archivo de Node.js ahora compartirá el puerto 8000 con los diferentes workers:

```js
$ node server.js
Master 3596 is running
Worker 4324 started
Worker 4520 started
Worker 6056 started
Worker 5644 started
```
En Windows, todavía no es posible establecer un nombre de proceso server en un worker.

Documentación Oficial de [NodeJs Cluster](https://nodejs.org/api/cluster.html)

## Request y Response Objects

El objeto ``req`` (Request) en Express representa el llamado HTTP y tiene diferentes propiedades del llamado, como la cadena de texto query (Query params), los parámetros de la URL (URL params), el cuerpo (Body), los encabezados (HTTP headers), etc.

Para acceder al ``req`` basta con acceder al primer parámetro de nuestros router handlers (router middleware) ó middleware.

Como por ejemplo así lo hemos visto siempre:

```js
app.get("/user/:id", function(req, res) {
  res.send("user " + req.params.id);
});
```

Pero también funcionaria sin problemas:

```js
app.get("/user/:id", function(request, response) {
  response.send("user " + request.params.id);
});
```

### Exploremos las propiedades más importantes

**req.body**

Contiene los pares de llave-valor de los datos enviados en el cuerpo (body) del llamado (request). Por defecto es ``undefined`` pero es establecido cuando se usa algún “body-parser” middleware como ``body-parser`` y ``multer``.

En Postman cuando hacemos un _request_ y enviamos datos en la pestaña **Body**, estos middlewares son los que nos ayudan a entender el tipo de datos que vamos a recibir en el ``req.body``.

Aquí podemos ver como se pueden usar estos middlwares para establecer el valor del ``req.body:``

```js
const app = require("express")();
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer(); // Para datos tipo multipart/form-data

app.use(bodyParser.json()); // Para datos tipo application/json
app.use(bodyParser.urlencoded({ extended: true })); // Para datos tipo application/x-www-form-urlencoded

app.post("/profile", upload.array(), function(req, res, next) {
  console.log(req.body);
  res.json(req.body);
});
```

Más información sobre los diferentes formatos que puede tener el body: https://developer.mozilla.org/es/docs/Web/HTTP/Methods/POST

**req.params**

Esta propiedad contiene un objeto con las propiedades equivalentes a los parámetros nombrados en la ruta. Por ejemplo, si tenemos una ruta de la forma ``/user/:name`` entonces la propiedad ``name`` está disponible como ``req.params.name`` y allí podremos ver su valor. Supongamos que llamaramos a la ruta con /user/glrodasz, entonces el valor de ``req.params.name`` sería ``glrodasz``. Este objeto por defecto tiene el valor de un objeto vacío ``{}``.

```js
// GET /user/glrodasz
req.params.name;
// => "glrodasz"
```

**req.query**

Esta propiedad contiene un objeto con las propiedades equivalentes a las cadenas de texto query de la ruta. Si no hay ninguna cadena de texto query tendrá como valor por defecto un objeto vacío ``{}``.

```js
req.query.q;
// => "tobi ferret"

// GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
req.query.order;
// => "desc"

req.query.shoe.color;
// => "blue"

req.query.shoe.type;
// => "converse"
```

Más información sobre los query strings en: https://es.wikipedia.org/wiki/Query_string y https://tools.ietf.org/html/rfc3986#section-3.4

**Response Object**

El objeto ``res`` representa la respuesta HTTP que envía una aplicación en Express.

Para acceder al ``res`` basta con acceder al segundo parámetro de nuestros router handlers (router middleware) o middleware.

Como por ejemplo así lo hemos visto siempre:

```js
app.get("/user/:id", function(req, res) {
  res.send("user " + req.params.id);
});
```

Pero también funcionaría sin problemas:

```js
app.get("/user/:id", function(request, response) {
  response.send("user " + request.params.id);
});
```

### Exploremos los métodos más comunes

**res.end()**

Finaliza el proceso de respuesta. Este método viene realmente del core de Node.js, específicamente del método ``response.end()`` de ``http.ServerResponse``.

Se usa para finalizar el request rápidamente sin ningún dato. Si necesitas enviar datos se debe usar ``res.send()`` y ``res.json()``.

```js
res.end();
res.status(404).end();
```

**res.json()**

Envía una respuesta JSON. Este método envía una respuesta (con el content-type correcto) y convierte el parámetro enviado a una cadena de texto JSON haciendo uso de ``JSON.stringify()``.

El parámetro puede ser cualquier tipo de JSON, incluido un objeto, un arreglo, una cadena de texto, un boolean, número, null y también puede ser usado para convertir otros valores a JSON.

```js
res.json(null);
res.json({ user: "tobi" });
res.status(500).json({ error: "message" });
```

**res.send()**

Envía una respuesta HTTP. El parámetro ``body`` puede ser un objeto tipo _Buffer_, una cadena de texto, un objeto, o un arreglo. Por ejemplo:

```js
res.send(Buffer.from("whoop"));
res.send({ some: "json" });
res.send("<p>some html</p>");
res.status(404).send("Sorry, we cannot find that!");
res.status(500).send({ error: "something blew up" });
```

## ¿Qué es express y para que sirve?

Express.js es un framework para crear [Web Apps](https://es.wikipedia.org/wiki/Aplicaci%C3%B3n_web), [Web APIs](https://es.wikipedia.org/wiki/Web_API) o cualquier tipo de [Web Services](https://es.wikipedia.org/wiki/Servicio_web), es libre bajo la licencia MIT.

Express es muy liviano y minimalista además de ser extensible a través de Middlewares.

Los Middlewares interceptan el request y el response para ejecutar una acción en medio.

Fechas importantes:

En el 2014 de express fueron adquiridos por una compañia llamada [StrongLoop]
En septiembre 2015 [IBM] adquirio StrongLoop
En enero del 2016 IBM anunció que express iba a ser dirigido por la [NodeJs Foundation]()

Caracterisiticas de express

- Minimalista
- Template Engines
- Routing
- Middlewares
- Plugins (como middlewares)


## Crea tu primer servidor en express

empezaremos creando una carpeta llamada movies-api, aquí es donde vamos a construir todo el backend de nuestro proyecto.

Para comenzar un proyecto en express lo más recomendable es generar un package.json 

```npm init o npm init -y``

Vamos a crear algunos scripts que nos serviran durante el desarrollo:

``"dev": "DEBUG=app:* nodemon index"``
``"start": "NODE_ENV=production node index"``

- DEBUG=app*: La variable de entorno debug me imprima todo lo que tenga el namespace de la aplicación.
- nodemon: Nos permite que cada vez que hagamos un cambio en el servidor refresque automaticamente, de está manera no tengo que estar bajando y subiendo el código.

- NODE_ENV=producction: Arrancar el proyecto en modo producción.
- node index: arrancamos el proyecto con nodejs.

Como queremos usar una configuración de [eslint]() bien interesante lo que vamos a hacer es crear un archivo *.eslintrc.json* con la siguiente configuración: 

```json
{
  // Todo mi código va a usar la versión de Ecmascript 2018 en adelante
  "parserOptions": {
    "ecmaVersion": 2018
  },
  // Vamos a extender la configuración de eslint recomendada y vamos a usar
  // una configuración compatible con prettier.
  "extends": ["eslint:recommended", "prettier"],
  "env": {
    // Vamos a usar variables de entorno de EcmaScript 6
    "es6": true,
    // Vamos a usar variables de entorno de Node
    "node": true,
    // Vamos a usar variables de entorno moca ¿Por qué?
    // Cuando lleguemos a la hora de hacer testsi utilizamos unas variables globales
    // eslint nos puede sacar un error, pero aqui le estamos especificando que son variables de moca
    "mocha": true
  }, 
  "rules": {
    // La regla de no-console: no va ha ser un error si no un warning 
    // porque aveces necesitamos dejarlo
    "no-console": "warn"
  }
}
```

Por otro lado vamos a configurar nuestro Prettierrc.json. [Prettier]() es una configuración muy interesante que nos permite formatear nuestro código es decir: Muchas veces hay problemas cuando un desarrollador formatea el código de una manera y otro desarrollador formatea el código de otra manera, esto suele ser bastante confunso y suele ser una perdida de tiempo en los call-review. **Prettier** se encargá de que todos los desarrolladores a la hora de hacer commit de su código sea igual, en este ejemplo pondremos algunas reglas, pero cada quien puede acomodarlo a su gusto.

```json
{
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```
Teniendo esta configuración base lo que vamos a hacer es empezar a instalar nuestras dependencias: **express** para crear nuestro servidor también **dotenv**: sirve para cargar nuestras variables de entorno.

Ahora vamos a instalar nuestras dependencias de desarrollo, estás dependencias a diferencia de las de producción, son dependencias que solo vamos a manejar acá, cuando nosotros desplegamos nuestra aplicación a producción no instalamos nuestras dependencias de desarrollo, esto hace que el código sea más liviano en producción.

devDependencies:

``npm i -D nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier``

Finalmente para que nuestro código haga el formateo automático cada vez que se hace commit y se sube al repositorio, vamos a instalar un hook, esto se instala solo mediante un comando que vamos a ver a continuación:

``npx mrm lint-staged``

Con esto el lint-staged automáticamente modifica nuestro packages.json y le dice mira cada vez que hagas un commit, vamos a coger todo el código y lo vamos a formatear con la configuración que hemos establecido de eslint y prettier, y lo vamos a subir nuestro repositorio.

Vamos a crear un nuevo archivo de configuración, es recomendable abstraerlo porque si el día de mañana estamos cargando nuestras variables de entorno de otra manera podemos hacerlo rápidamente haciendo el cambio solo a nuestro archivo de configuración, en esté caso vamos a hacer uso de [dotenv], más adelante vamos a entender que es, pero por ahora solo crearemos un archivo de configuración muy sencillo.

```js
require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000
}

module.exports = { config };
```

Ahora vamos a crear nuestro servidor en express

```js
const express = require('express');
const app = express();

const { config } = require('./config/index');

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
```

Challenge: Crear un servidor que detecte si el año es bisiesto:

```js
const express = require('express');
const app = express();

// Cuando hagamos un request de tipo GET 
app.get('/', (req, res) => {
  // Lo que vamos a enviar a pantalla
  res.send("Envianos el año en la url escribiendo '/año'");
})

app.get('/:year', (req, res) => {
  const year = req.params.year;
  if (year % 4 === 0 && year % 100 !== 0) {
    res.send(`El ${year} Es bisiesto`);
  } else {
    res.send(`Lo siento el año ${year} no es bisiesto :(`);
  }
})

app.listen(2000, function () {
  console.log('Litening http://localhost:2000');
})
```

## Anatomía de una API Restful

Rest: que significa representational state transfer (rest) es un estilo de arquitectura para construir web services, no es un standart pero si existe una especificación creada por [Roy Fielding](https://es.wikipedia.org/wiki/Roy_Fielding) el es el confundador de apache server y director de Apache Software fundation también actualmente trabaja como director de adobe.

Las peticiones HTTP van acompañadas de un “verbo” que define el tipo de petición:

- GET. Lectura de datos.
- PUT. Reemplazar datos.
- PATCH. Actualizar datos en un recurso específico.
- POST. Creación de datos.
- DELETE. Eliminación de datos.

No es recomendable habilitar un endpoint de tipo PUT y DELETE para toda nuestra colección de datos, sólo hacerlos para recursos específicos, ya que no queremos que por error se puedan borrar todos nuestros datos.

## Estructura de una película con Moockaru

**Mockaroo** es un servicio que nos permite crear datos simulados a partir de una estructura, por ejemplo para generar la estructura de nuestra película:

```json
{
    id: 'd2a4a062-d256-41bb-b1b2-9d915af6b75e',
    title: 'Notti bianche, Le (White Nights)',
    year: 2019,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    duration: 66,
    contentRating: 'G',
    source: 'https://ovh.net/semper/rutrum/nulla/nunc.jsp',
    tags: [
      'Action|Adventure',
      'Action|Adventure|Thriller',
      'Horror|Western',
      'Horror|Thriller',
      'Comedy|Romance|Sci-Fi',
      'Adventure|Animation|Children|Comedy|Fantasy',
      'Drama'
    ]
  }
```

Lo que podemos hacer en Mockaroo es seleccionar la siguiente estructura:

<div align="center">
  <img src="./assets/mockaroo.jpg" alt="mockaroo estrucutura">
</div>

Luego seleccionamos el número de filas (rows) que queremos generar y elegimos el formato, en este caso será de tipo JSON. Podemos hacer clic en preview para ver cómo queda y finalmente para descargar los datos hacemos clic en **Download Data**.

<div align="center">
  <img src="./assets/mockaroo-preview.jpg" alt="mockaroo estrucutura">
</div>







