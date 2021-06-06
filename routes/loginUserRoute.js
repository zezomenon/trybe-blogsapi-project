const express = require('express');
const { loginUserController } = require('../controllers');

const router = express.Router();

router.post('/', loginUserController);

module.exports = router;
