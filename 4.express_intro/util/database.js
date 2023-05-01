const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  // Visit and check current IP: https://cloud.mongodb.com/v2/644c42e39493d7067c709900#/clusters 
  // connecttion: mongodb+srv://amrsanu:Root123@cluster0.cdopsge.mongodb.net/test
    MongoClient.connect('mongodb+srv://amrsanu:Root123@cluster0.cdopsge.mongodb.net/shop?retryWrites=true&w=majority')
        .then(client => {
            console.log("Connected to Mongo...");
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_db){
        return _db;
    }
    throw "No Database Connection Available";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
// module.exports = mongoConnect;