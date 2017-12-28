const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');

const config = require('./config');

const swaggerSpec = swaggerJSDoc({
  swaggerDefinition: {
    info: {
      title: 'Metro API',
      version: '1.0.0',
      description: 'Metro API',
    },
    host: config.host + ':' + config.port,
    basePath: '/api',
    securityDefinitions: {
      auth: {
        type: 'basic',
      }
    },
  },
  apis: [
    path.resolve(__dirname, '../app/**/**.js'),
  ],
});

module.exports = swaggerSpec
