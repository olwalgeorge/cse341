//w01-project/config/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Project1 API',
      version: '1.0.0',
      description: 'API for managing users',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            username: { type: 'string' },
            email: { type: 'string' },
            // Add other user properties here
          },
        },
      },
    },
  },
  apis: ['./app/routes/*.js'], // Path to the API docs
};

module.exports = swaggerJsdoc(options);