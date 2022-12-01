const mongoose = require("mongoose");
var validate = require('mongoose-validator');
const dotenv = require("dotenv").config({path: '.env'});

var profileValidator = [{
    validator1:validate({
      validator: 'isLength',
      arguments: [3, 20],
      message: 'First Name value must be between {ARGS[0]} and {ARGS[1]}',
    }),
    validator2:validate({
      validator: 'isLength',
      arguments: [1, 8],
      message: 'Last Name value must be between {ARGS[0]} and {ARGS[1]}',
    }),
    validator3:validate({
      validator: 'isLength',
      arguments: [1, 20],
      message: 'Nickname value must be between {ARGS[0]} and {ARGS[1]}',
    }),
  }];

const profileSchema = new mongoose.Schema({
    first_name:{
        type: String,
        validate:profileValidator[0].validator1,
        required:[true, "This field is required."]
    },
    last_name:{
      type:String,
      required:[true, "This field is required."],
      validate:profileValidator[0].validator2
    },
    nickname:{
        type:String,
        required:[true, "This field is required."],
        validate:profileValidator[0].validator3
    },
    image:{
      type:String,
    },
},
{
  timestamps: true,
});


module.exports = profileSchema;
