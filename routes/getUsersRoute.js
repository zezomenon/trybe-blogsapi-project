const express = require('express');
const { getUsersController } = require('../controllers');

const router = express.Router();

router.get('/', getUsersController);

module.exports = router;
