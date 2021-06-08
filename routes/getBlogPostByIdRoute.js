const express = require('express');
const { getBlogPostByIdController } = require('../controllers');

const router = express.Router();

router.get('/:id', getBlogPostByIdController);

module.exports = router;
