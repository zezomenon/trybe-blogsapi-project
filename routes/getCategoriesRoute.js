const express = require('express');
const { getCategoriesController } = require('../controllers');

const router = express.Router();

router.get('/', getCategoriesController);

module.exports = router;
