// w01-project/config/database.js
// Configuration for MongoDB
require('dotenv').config();

if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not defined');
}

const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
