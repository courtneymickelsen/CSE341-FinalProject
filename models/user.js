const mongoose = require("mongoose");
const usernameValidator = require("../middlewares/user");
const bcrypt = require("bcrypt");
var saltRounds = process.env.DB_SALT;

const userSchema = new mongoose.Schema({
    username: {
        type:String, 
        required:[true, "Username is Required."],
        validate:usernameValidator[0].validator3 ,},
    password :{
        type:String, 
        validate:usernameValidator[0].validator2,},
},
{
  timestamps: true,
});

userSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(saltRounds, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
          // override the cleartext password with the hashed one
          user.password = hash;
          next();
      });
  });
});



module.exports = userSchema;