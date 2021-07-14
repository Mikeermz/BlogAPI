const express = require('express');
const router = express.Router();

const PostController = require('../controllers/posts');
const { PostValidator } = require('../validators');

// posts routes
router.get('/users', PostController.populatedPosts);
router.get('/',PostController.fetch);
router.get('/:id', PostController.retrieve)
router.post('/', PostValidator.create ,PostController.add)
router.put('/:id', PostController.modify)
router.delete('/:id', PostController.eliminate)


module.exports = router;