var validate = require('mongoose-validator');

var reminderValidator = [{
    validator1:validate({
      validator: 'isLength',
      arguments: [3, 30],
      message: 'Title value must be between {ARGS[0]} and {ARGS[1]}',
    }),
  }];

  module.exports = reminderValidator;