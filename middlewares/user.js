var validate = require('mongoose-validator');

var usernameValidator = [{
    validator1:validate({
      validator: 'isLength',
      arguments: [3, 15],
      message: 'Username must be between {ARGS[0]} and {ARGS[1]}',
    }),
    validator2:validate({
      validator: 'isLength',
      arguments: [3, 20],
      message: 'Password must be between {ARGS[0]} and {ARGS[1]}',
    }),
    validator3:validate({
      validator: 'isEmail',
      message: 'Email is Invalid.',
    }),
  }
    ];

module.exports = usernameValidator;