const { generateToken } = require('../middlewares/auth');
const validations = require('../middlewares/validations');
const { User } = require('../models');

const loginUserService = async (email, password) => {
  validations.emailValidateLogin(email);
  validations.passwordValidateLogin(password);
  const result = await User.findOne({ where: { email } });
  validations.invalidEmail(result);

  const token = generateToken(email);
  return token;
};

module.exports = loginUserService;
