var validate = require('mongoose-validator');

var ideaValidator = [{
    validator1:validate({
      validator: 'isLength',
      arguments: [3, 20],
      message: 'Title value must be between {ARGS[0]} and {ARGS[1]}',
    }),
  }];

  module.exports = ideaValidator;