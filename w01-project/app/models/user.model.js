// w01-project/app/models/user.model.js
// Model for user data defining schema

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    firstName: String,
    lastName: String,
    role: String,
    projects: [String],
    active: Boolean,
    joinedDate: Date,
    lastLoginIP: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;


