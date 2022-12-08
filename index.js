const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}), bodyParser.json());
const PORT = 3000;
const routes = require('./routes/index');
app.use(routes);
var cors = require('cors');
app.use(cors());



app.all("/*", (req,res) => {
    res.send("404 Page Not found.\n It could be possible that this resource does not exist or was never created.");
});

app.listen((PORT), ()=>{
    console.log("This server is listening on http://localhost:" + PORT);
});



