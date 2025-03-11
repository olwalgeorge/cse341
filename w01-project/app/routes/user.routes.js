// w01-project/app/routes/users.js
// Router for user routes 

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:userId', userController.getUserById);
router.patch('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;
