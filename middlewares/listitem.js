var validate = require('mongoose-validator');

var listItemValidator = [{
    validator1:validate({
      validator: 'isLength',
      arguments: [3, 60],
      message: 'Title value must be between {ARGS[0]} and {ARGS[1]}',
    }),
    validator2:validate({
      validator: 'isLength',
      arguments: [1, 50],
      message: 'Location value must be between {ARGS[0]} and {ARGS[1]}',
    }),
    validator3:validate({
      validator: 'isLength',
      arguments: [1, 100],
      message: 'Supplies value must be between {ARGS[0]} and {ARGS[1]}',
    }),
    validator4:validate({
      validator: 'isLength',
      arguments: [1, 100],
      message: 'Notes value must be between {ARGS[0]} and {ARGS[1]}',
    }),
  }];

  module.exports = listItemValidator;