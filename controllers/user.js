const connect = require('../database/db');
const userSchema= require("../models/user");


exports.login =  async function(req,res) {
    var db = await connect();    
    db.model("users", userSchema).findOrCreate({ googleId: req.oidc.user.sid, username:req.oidc.user.email, 
    }, function (err, user) {
        console.log(req.oidc.user);
      if(err){
        console.log(err.message);
      }
      console.log(user);
      res.send(user);
    });
  };