const { verifyToken, getInfoUser } = require('../middlewares/auth');
const { User } = require('../models');

const deleteUserService = async (authorization) => {
  verifyToken(authorization);
  const { email } = getInfoUser(authorization);
  const { id } = await User.findOne({ where: { email } });
  
  await User.destroy({ where: { id } });
  return true;
};

module.exports = deleteUserService;
