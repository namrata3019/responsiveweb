const mongoose = require('mongoose');

const mongo = mongoose.connect("mongodb://localhost:27017" ,  {
    autoIndex:false,
    autoCreate:true,
    dbName:"PaymentService",
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, ()=> {
    console.log("connected")
});

exports.mongo = mongo;