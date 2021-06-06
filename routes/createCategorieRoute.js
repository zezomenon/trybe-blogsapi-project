const express = require('express');
const { createCategorieController } = require('../controllers');

const router = express.Router();

router.post('/', createCategorieController);

module.exports = router;
