const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { generateToken } = require('../middlewares/auth');
const { User } = require('../models');

const emailValidate = (email) => {
  if (email === undefined) {
    throw new CustomError({
      message: '"email" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
  if (email === '') {
    throw new CustomError({
      message: '"email" is not allowed to be empty',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const passwordValidate = (password) => {
  if (password === undefined) {
    throw new CustomError({
      message: '"password" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
  if (password === '') {
    throw new CustomError({
      message: '"password" is not allowed to be empty',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const invalidEmail = (result) => {
  if (result === null) {
    throw new CustomError({
      message: 'Invalid fields',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const loginUserService = async (email, password) => {
  emailValidate(email);
  passwordValidate(password);
  const result = await User.findOne({ where: { email } });
  invalidEmail(result);

  const token = generateToken(email);
  return token;
};

module.exports = loginUserService;
