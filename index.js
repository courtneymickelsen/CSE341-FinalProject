const express = require("express");
const app = express();
const PORT = 3000;
const routes = require('./routes/user');
app.use(routes);


app.all("/*", (req,res) => {
    res.send("404 Page Not found.\n It could be possible that this resource does not exist or was never created.");
});

app.listen((PORT), ()=>{
    console.log("This server is listening on http://localhost:" + PORT);
});

