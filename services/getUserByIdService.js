const { verifyToken } = require('../middlewares/auth');
const validations = require('../middlewares/validations');
const { User } = require('../models');

const getUserByIdService = async (authorization, id) => {
  verifyToken(authorization);
  const result = await User.findOne({ where: { id } });
  validations.checkUserExists(result);
  return result;
};

module.exports = getUserByIdService;
