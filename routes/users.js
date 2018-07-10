var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/', authController.isLoggedIn, userController.getUsers);

module.exports = router;
