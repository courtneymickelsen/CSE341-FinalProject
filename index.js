const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require('./routes/index');
const dotenv = require("dotenv").config({path: '.env'});
var cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}), bodyParser.json());
app.use(routes);
app.use(cors());

app.all("/*", (req,res) => {
    res.send("404 Page Not found.\n It could be possible that this resource does not exist or was never created.");
});

app.listen((PORT), ()=>{
    console.log("This server is listening on http://localhost:" + PORT);
});



