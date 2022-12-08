const mongoose = require("mongoose");
const ideaValidator = require("../middlewares/idea");

const ideaSchema = new mongoose.Schema({
    title:{
        type: String,
        validate:ideaValidator[0].validator1,
        required:[true, "This field is required."]
    },
},
{
  timestamps: true,
});


module.exports = ideaSchema;