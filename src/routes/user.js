const express = require('express');
const router = express.Router();

const { UserValidator } = require('../validators');
const UserController = require('../controllers/user');

// user routes
router.get('/', UserController.fetch);
router.get('/:id', UserValidator.findOne, UserController.retrieve);
router.put('/:id', UserValidator.create, UserController.modify);
router.delete('/:id', UserController.eliminate);
router.get('/:id/posts', UserController.populatedUser);

// const { UserValidator: { findOne, create } } = require('../validators');
// const { fetch, retrieve, modify, eliminate, populatedUser } = require('../controllers/user');

// // user routes
// router.get('/', fetch);
// router.get('/:id', findOne, retrieve);
// router.put('/:id', create, modify);
// router.delete('/:id', eliminate);
// router.get('/:id/posts', populatedUser);

module.exports = router;