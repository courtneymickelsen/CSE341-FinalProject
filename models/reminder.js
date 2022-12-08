const mongoose = require("mongoose");
const reminderValidator = require("../middlewares/reminder");



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