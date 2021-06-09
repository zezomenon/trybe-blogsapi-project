const express = require('express');
const { deleteUserController } = require('../controllers');

const router = express.Router();

router.delete('/me', deleteUserController);

module.exports = router;
