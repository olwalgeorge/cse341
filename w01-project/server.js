// server.js
// Entry point for the application acting as a server

const express = require('express');
const app = express();
const connectDB = require('./config/database');
const userRoutes = require('./app/routes/user.routes');

app.get('/', (req, res) => {
    res.status(200).send('Welcome to My Project1 Application');
});

app.use(express.json());

app.use('/api', userRoutes);

connectDB().then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error(error.message);
    process.exit(1);
});





