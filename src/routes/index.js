const express = require('express');
const {celebrate, Joi, Segments} = require('celebrate');
const router = express.Router();
const UserController = require('../controllers/user');
const PostController = require('../controllers/posts');
const verify = require('../middlewares/verify');

const userCreateValidator = {
    [Segments.BODY] :{
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email().required(),
        birth_date: Joi.date(),
        gender: Joi.string().valid('male','female', 'other'),
        password: Joi.string().required(),
    } //schema de validacion
}

const postCreateValidator = {
    [Segments.BODY] :{
        title: Joi.string().required(),
        body: Joi.string().required(),
        category: Joi.string().required(),
        user_id: Joi.number().integer().required(),
    } //schema de validacion
}

// user routes

router.get('/users', verify, UserController.fetch);
router.get('/users/:id', verify, UserController.retrieve)
router.post('/user/login', UserController.login)
router.post('/users', celebrate(userCreateValidator), UserController.add)
router.put('/users/:id', verify, celebrate(userCreateValidator), UserController.modify)
router.delete('/users/:id', verify, UserController.eliminate)
router.get('/users/:id/posts', verify, UserController.populatedUser)

// posts routes
router.get('/posts/users', verify, PostController.populatedPosts);
router.get('/posts', verify,PostController.fetch);
router.get('/posts/:id', verify, PostController.retrieve)
router.post('/posts', verify, celebrate(postCreateValidator) ,PostController.add)
router.put('/posts/:id', verify, PostController.modify)
router.delete('/posts/:id', verify, PostController.eliminate)

module.exports =  router;