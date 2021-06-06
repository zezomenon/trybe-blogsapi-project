const { verifyToken } = require('../middlewares/auth');
const { User } = require('../models');

const getUsersService = async (authorization) => {
  verifyToken(authorization);
  const result = await User.findAll();
  return result;
};

module.exports = getUsersService;
