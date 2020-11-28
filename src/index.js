const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'test';
const cli = new MongoClient(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

cli.connect().then((client) => {
  console.log('Connected successfully to mongodb server');

  const db = client.db(dbName);
  // console.log(db);

  const collection = db.collection('users');
  collection.insertOne({ name: 'balu', roll: '345' });
});
