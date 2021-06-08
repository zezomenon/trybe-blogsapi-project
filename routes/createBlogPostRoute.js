const express = require('express');
const { createBlogPostController } = require('../controllers');

const router = express.Router();

router.post('/', createBlogPostController);

module.exports = router;
