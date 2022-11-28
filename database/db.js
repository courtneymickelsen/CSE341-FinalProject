const mongoose = require("mongoose");

const URI = "mongodb+srv://kofi:jaBf7HxXeilZmNUz@cluster0.bibvhtj.mongodb.net";
const dbName = "bucketListApp";

async function connect(){
    const db =  mongoose.connect(URI + "/"+ dbName + "?retryWrites=true", {useNewUrlParser:true});
    console.log('Connected successfully to server');
    return db;
}
 

module.exports = connect;