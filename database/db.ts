var mongoose = require("mongoose");
var dotenv = require("dotenv").config({path: '.env'});

const URI: string | undefined = process.env.DB_URI;
const dbName: string | undefined = process.env.DB_NAME;

async function connect(){
    const db =  mongoose.connect(URI + "/"+ dbName + "?retryWrites=true", {useNewUrlParser:true});
    console.log('Connected successfully to server');
    return db;
}

module.exports = connect;
