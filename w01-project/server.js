// server.js
// Entry point for the application acting as a server

const express = require('express');
const app = express();
const connectDB = require('./config/database');
const contactRoutes = require('./app/routes/contact.routes');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./app/helpers/swagger'); // Import swagger config

app.use(express.json());

const specs = swaggerConfig; // Use the imported configuration
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (req, res) => {
  res.status(200).send('Welcome to My Project1 Application');
});

app.use('/api', contactRoutes);

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });