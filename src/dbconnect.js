const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'soundhound';

const getDB = async () => {
  const cli = new MongoClient(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const client = await cli.connect();
  const db = client.db(dbName);
  return db;
};

module.exports = getDB;
