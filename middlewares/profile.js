var validate = require('mongoose-validator');

var profileValidator = [{
    validator1:validate({
      validator: 'isLength',
      arguments: [3, 20],
      message: 'First Name value must be between {ARGS[0]} and {ARGS[1]}',
    }),
    validator2:validate({
      validator: 'isLength',
      arguments: [3, 20],
      message: 'Last Name value must be between {ARGS[0]} and {ARGS[1]}',
    }),
    validator3:validate({
      validator: 'isLength',
      arguments: [1, 20],
      message: 'Nickname value must be between {ARGS[0]} and {ARGS[1]}',
    }),
    validator4:validate({
      validator: 'isEmail',
      message: 'Email is Invalid.',
    }),
  }];

  module.exports = profileValidator;