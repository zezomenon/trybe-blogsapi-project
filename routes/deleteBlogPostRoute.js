const express = require('express');
const { deleteBlogPostController } = require('../controllers');

const router = express.Router();

router.delete('/:id', deleteBlogPostController);

module.exports = router;
