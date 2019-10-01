const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config');

// aquí vamos a crear las diferentes constantes
// encodeURIComponent nos garantizá que si por alguna razón hay algunos caracteres especiales
// no tengamos problemas a la hora de conectarnos.
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

// Ahora ya podemos comenzar a escribir nuestra uri de mongo
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;
// mongodb+srv://db_user_platzivideos:<password>@cluster0-nnl4g.mongodb.net/test?retryWrites=true&w=majority
class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    this.dbName = DB_NAME;
  }

  connect() {
    // Usamos patron Singleton: la idea es que cada vez que nos conectemos a nuestra base de datos
    // no nos cree un nuevo cliente. Si no que si el cliente ya está y la conexión ya esta abierta, usemos esa misma conexión
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) {
            reject(err);
          }

          console.log('Connected succesfully to mongo');
          resolve(this.client.db(this.dbName));
        });
      });
    }

    return MongoLib.connection;
  }

  // Todos necesiatan retornas el método connect, y connect lo que nos retorna es una promesa
  // nos devuelve una instancia a la base de datos y esa instancia de la bd tiene los métodos de mongo.
  getAll(collection, query) {
    return this.connect().then(db => {
      return db
        .collection(collection)
        .find(query)
        .toArray();
    });
  }
  get(collection, id) {
    return this.connect().then(db => {
      return db.collection(collection).findOne({ _id: ObjectId(id) });
    });
  }
  create(collection, data) {
    return this.connect()
      .then(db => {
        return db.collection(collection).insertOne(data);
      })
      .then(result => result.insertedId);
  }
  updated(collection, id, data) {
    return this.connect()
      .then(db => {
        return db
          .collection(collection)
          .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
      })
      .then(result => result.updsertdId || id);
  }
  delete(collection, id) {
    return this.connect()
      .then(db => db.collection(collection).deleteOne({ _id: ObjectId(id) }))
      .then(() => id);
  }
}

module.exports = MongoLib;
