const dbConfig = require("../config/db.user") ;

const mongoose = require('mongoose');

const mongo = mongoose.connect("mongodb://localhost:27017" ,  {
    autoIndex:false,
    autoCreate:true,
    dbName:"usersDB",
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, ()=> {
    console.log("connected")
});

exports.mongo = mongo;

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongo;

db.url = dbConfig.url;

db.users = require("./user.model") (mongoose) ;

module.exports = db;