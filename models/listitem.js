const mongoose = require("mongoose");
var validate = require('mongoose-validator');
const dotenv = require("dotenv").config({path: '.env'});

var listItemValidator = [{
    validator1:validate({
      validator: 'isLength',
      arguments: [3, 20],
      message: 'Title value must be between {ARGS[0]} and {ARGS[1]}',
    }),
    validator2:validate({
      validator: 'isLength',
      arguments: [1, 8],
      message: 'Location value must be between {ARGS[0]} and {ARGS[1]}',
    }),
    validator3:validate({
      validator: 'isLength',
      arguments: [1, 20],
      message: 'Supplies value must be between {ARGS[0]} and {ARGS[1]}',
    }),
    validator4:validate({
      validator: 'isLength',
      arguments: [1, 30],
      message: 'Notes value must be between {ARGS[0]} and {ARGS[1]}',
    }),
  }];

const listItemSchema = new mongoose.Schema({
    title:{
        type: String,
        validate:listItemValidator[0].validator1,
        required:[true, "This field is required."]
    },
    cost:{
        type:Number,
        required:[true, "This field is required."],
        validate:Number.isInteger
    },
    location:{
      type:String,
      required:[true, "This field is required."],
      validate:listItemValidator[0].validator2
    },
    supplies:{
      type:String,
      required:[true, "This field is required."],
      validate:listItemValidator[0].validator3
    },
    complete:{
      type:Boolean,
      required:[true, "This field is required."],
    },
    notes:{
        type:String,
        required:[true, "This field is required."],
        validate:listItemValidator[0].validator4
      },
    people: [{
        type:mongoose.Types.ObjectId, 
        ref:process.env.DB_COLLECTION_1, }],
},
{
  timestamps: true,
});


module.exports = listItemSchema;

