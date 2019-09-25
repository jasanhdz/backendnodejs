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