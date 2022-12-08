const mongoose = require("mongoose");
const ideaValidator = require("../middlewares/idea");

const ideaSchema = new mongoose.Schema({
    title:{
        type: String,
        validate:ideaValidator[0].validator1,
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


module.exports = ideaSchema;