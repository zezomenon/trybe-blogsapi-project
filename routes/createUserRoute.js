const express = require('express');
const { createUserController } = require('../controllers');

const router = express.Router();

router.post('/', createUserController);

module.exports = router;
