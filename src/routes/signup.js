const express = require('express');
const router = express.Router();

const { UserValidator } = require('../validators');
const UserController = require('../controllers/user');

router.post('/login', UserValidator.login, UserController.login)
router.post('/', UserValidator.create, UserController.add)

module.exports = router;