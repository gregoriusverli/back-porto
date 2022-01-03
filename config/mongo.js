const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const dbName = "portofolio";
const client = new MongoClient(url);

var db;

function connect(cb) {
  client.connect((err) => {
    if (err) {
      console.log("connection failed", err);
    } else {
      console.log("connection success");
      db = client.db(dbName);
    }
  });
}

function getDatabase() {
  return db;
}

module.exports = {
  connect,
  getDatabase,
};
