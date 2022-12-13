const connect = require('../database/db');
const profileSchema = require("../models/profile");
const dotenv = require("dotenv").config({path: '.env'});
const { ObjectId } = require("mongodb");


exports.createProfile = (async(req, res) => {
    try{
        var db = await connect();    
        var Profile =db.model(process.env.DB_COLLECTION_5, profileSchema);
        Profile.findOne({ 
            email: req.oidc.user.email
        }).then(async (profile) => {
          if (profile) {
              console.log("Profile already Exists");
              res.send(req.oidc.isAuthenticated() ? res.send(profile): res.redirect('/home'));
          } else {
            var prof= new Profile({
              googleId: req.oidc.user.sid,
              first_name:req.oidc.user.given_name,
              last_name:req.oidc.user.family_name,
              email:req.oidc.user.email,
              nickname:req.oidc.user.nickname,
              image: req.oidc.user.picture,
          });
              await prof.save();
              res.send(req.oidc.isAuthenticated() ? res.send(prof): res.redirect('/home'));
          }
      });
    }catch(e){
        res.send(e.message);
    }
    
});

//Get User Profile
exports.getProfile = (async(req, res) => {
    try{
        var db = await connect();    
        var Profile =db.model(process.env.DB_COLLECTION_5, profileSchema);
        Profile.findOne({ 
          _id:ObjectId(req.params)
        }).then(async (profile) => {
          if (profile) {
              res.send(profile);
          } else {
            res.send("No profile exists for this user.");
          }
      });
    }catch(e){
        res.send(e.message);
    }
  
});

  

// Update Profile
exports.updateProfile =(async(req,res)=>{
  try{
      var db = await connect();
      var Profile = db.model(process.env.DB_COLLECTION_5, profileSchema);
      Profile.findByIdAndUpdate({ _id: ObjectId(req.params)},
      {$set: { first_name:req.body.first_name,
               last_name:req.body.last_name,
               nickname: req.body.nickname}}, (err, profile)=>{
      if(err){
          res.send(err.message);
      }else{
        res.send({message: "Update was successful."});
      }
  });
  }catch(e){
      res.send(e.message);
  }
});

//Delete Profile
exports.deleteProfile = (async(req,res)=>{
  try{
      var db = await connect();
      var Profile = db.model(process.env.DB_COLLECTION_5, profileSchema);
      Profile.findOneAndDelete({ _id: ObjectId(req.params.id )}, (err, profile)=>{
          if(err){
              res.status(500).send(err.message);
          }else{
          res.send({message: "Delete was successful."});
          }
      });
      }catch(e){
          res.status(500).send(e.message);
      }
});