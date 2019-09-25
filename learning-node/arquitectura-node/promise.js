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
promise
  .then(msg => msg.toUpperCase())
  .then(msg => console.log('message', msg))
  .catch(err => console.log('Error', err));