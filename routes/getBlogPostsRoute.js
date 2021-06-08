const express = require('express');
const { getBlogPostsController } = require('../controllers');

const router = express.Router();

router.get('/', getBlogPostsController);

module.exports = router;
