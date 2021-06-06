const express = require('express');
const { getUserByIdController } = require('../controllers');

const router = express.Router();

router.get('/:id', getUserByIdController);

module.exports = router;
