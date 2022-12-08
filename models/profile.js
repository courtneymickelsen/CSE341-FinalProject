const mongoose = require("mongoose");
const profileValidator = require("../middlewares/profile");

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
    email:{
      type:String,
      required:[true, "This field is required."],
      validate:profileValidator[0].validator4
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
