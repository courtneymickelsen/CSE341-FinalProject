const mongoose = require("mongoose");
const listItemValidator = require("../middlewares/listitem");

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

