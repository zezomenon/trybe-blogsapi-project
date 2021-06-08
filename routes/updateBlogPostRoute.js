const express = require('express');
const { updateBlogPostController } = require('../controllers');

const router = express.Router();

router.put('/:id', updateBlogPostController);

module.exports = router;
