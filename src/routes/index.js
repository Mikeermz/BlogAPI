const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlewares/verify');
// Rutas indexadas
const homeRoutes = require('./home');
const signUpRoutes = require('./signup');
const userRoutes = require('./user');

// const PostController = require('../controllers/posts');
// const { PostValidator } = require('../validators');

router.use(homeRoutes);
router.use('/signup', signUpRoutes);
router.use('/users', AuthMiddleware, userRoutes);

// // posts routes
// router.get('/posts/users', verify, PostController.populatedPosts);
// router.get('/posts', verify,PostController.fetch);
// router.get('/posts/:id', verify, PostController.retrieve)
// router.post('/posts', verify, PostValidator.create ,PostController.add)
// router.put('/posts/:id', verify, PostController.modify)
// router.delete('/posts/:id', verify, PostController.eliminate)

module.exports =  router;