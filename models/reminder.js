const mongoose = require("mongoose");
var validate = require('mongoose-validator');
const dotenv = require("dotenv").config({path: '.env'});

var reminderValidator = [{
    validator1:validate({
      validator: 'isLength',
      arguments: [3, 20],
      message: 'Title value must be between {ARGS[0]} and {ARGS[1]}',
    }),
  }];

const reminderSchema = new mongoose.Schema({
    title:{
        type: String,
        validate:reminderValidator[0].validator1,
        required:[true, "This field is required."]
    },
    date:{
      type:String,
      required:[true, "This field is required."]
    },
    time:{
      type:String,
      required:[true, "This field is required."]
    },
    items: [{
        type:mongoose.Types.ObjectId, 
        ref:process.env.DB_COLLECTION_2, }],
},
{
  timestamps: true,
});


module.exports = reminderSchema;