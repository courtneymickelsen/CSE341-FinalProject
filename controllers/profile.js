const connect = require('../database/db');
const profileSchema= require("../models/profile");
const dotenv = require("dotenv").config({path: '.env'});
const { ObjectId } = require("mongodb");

exports.createProfile =(async(req, res) => {
    var db = await connect();    
    db.model(process.env.DB_COLLECTION_5, profileSchema).findOrCreate({ 
        googleId: req.oidc.user.sid,
         first_name:req.oidc.user.given_name,
         last_name:req.oidc.user.family_name,
         nickname:req.oidc.user.nickname,
         image: req.oidc.user.picture,
    }, function (err, profile) {
      if(err){
        console.log(err.message);
      }
      console.log(profile);
      res.send(req.oidc.isAuthenticated() ? res.send(profile): res.redirect('/home')); 
    });
});

//Update Profile
// exports.updateProfile =(async(req,res)=>{
//   try{
//       var db = await connect();
//       var Profile = db.model(process.env.DB_COLLECTION_5, profileSchema);
//       Profile.findByIdAndUpdate({ _id: ObjectId(req.params)},
//       {$set: { first_name:req.body.first_name,
//                last_name:req.body.last_name,
//                 nickname: req.body.nickname}}, (err, profile)=>{
//       if(err){
//           res.send(err.message);
//       }else{
//           res.status(500).sendStatus(200);
//       }
//   });
//   }catch(e){
//       res.status(500).send(e.message);
//   }
// });

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