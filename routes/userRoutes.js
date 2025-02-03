const express = require('express');
const { register, getAllUsers } = require('../controller/usersController');
// const userController = require('../controller/usersController');

const router = express.Router();

router.post('/register', register);
router.get('/all', getAllUsers);


module.exports = router;