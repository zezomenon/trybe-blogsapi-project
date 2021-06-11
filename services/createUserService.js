const { generateToken } = require('../middlewares/auth');
const validations = require('../middlewares/validations');
const { User } = require('../models');

const createUserService = async (displayName, email, password, image) => {
  validations.displayNameValidate(displayName);
  validations.passwordValidate(password);
  validations.emailValidate(email);
  await validations.emailAlreadyExists(email);
  await User.create({ displayName, email, password, image });
  const token = generateToken(email);
  return token;
};

module.exports = createUserService;
