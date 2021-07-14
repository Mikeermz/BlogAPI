const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlewares/verify');
// Rutas indexadas
const homeRoutes = require('./home');
const signUpRoutes = require('./signup');
const userRoutes = require('./user');
const postRoutes = require('./post');

router.use(homeRoutes);
router.use('/signup', signUpRoutes);
router.use('/users', AuthMiddleware, userRoutes);
router.use('/posts', AuthMiddleware, postRoutes);

module.exports =  router;