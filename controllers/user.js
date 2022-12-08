const connect = require('../database/db');
const userSchema= require("../models/user");
const dotenv = require("dotenv").config({path: '.env'});

exports.signin =  async function(req,res) {
    var db = await connect();    
    db.model(process.env.DB_COLLECTION_1, userSchema).findOrCreate({ googleId: req.oidc.user.sid, username:req.oidc.user.email, 
    }, function (err, user) {
      if(err){
        console.log(err.message);
      }
      console.log(user);
      res.redirect('/profile/');
    });
  };