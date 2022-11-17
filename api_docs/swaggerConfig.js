const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Bucket List App',
    description: 'Bucket List App'
  },
  
  host: 'localhost:3000',
  schemes: ['http']
};

const outputFile = '../swagger.json';
const endpointsFiles = ['../routes/'];

swaggerAutogen(outputFile, endpointsFiles, doc);

