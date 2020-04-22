const mongodb = require('mongodb').MongoClient

const uri = "mongodb+srv://brunoAccountMongoTest:Bz0gmsX5paIR0pb0@cluster0-1mxsj.mongodb.net/shop?retryWrites=true&w=majority";
let _db

const mongoConnect = callback => {
  mongodb.connect(uri)
  .then(client => {
    console.log('Connected!')
    _db = client.db()
    callback(client)
  })
  .catch(err => {
    console.log(err)
    throw err
  })
}

const getDb = () => {
  if (_db) {
    return  _db
  }
  throw 'No database found!'
}


exports.mongoConnect = mongoConnect
exports.getDb = getDb


