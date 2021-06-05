const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { generateToken } = require('../middlewares/auth');
const { User } = require('../models');

const displayNameValidate = (displayName) => {
  const MIN_SIZE_NAME = 8;
  if (displayName.length < MIN_SIZE_NAME) {
    throw new CustomError({
      message: '"displayName" length must be at least 8 characters long',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const passwordValidate = (password) => {
  const MIN_SIZE_PASSWORD = 6;
  if (!password) {
    throw new CustomError({
      message: '"password" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
  if (password.length < MIN_SIZE_PASSWORD) {
    throw new CustomError({
      message: '"password" length must be 6 characters long',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const emailValidate = (email) => {
  const regexEmail = /\S+@\S+\.\S+/.test(email);
  if (!email) {
    throw new CustomError({
      message: '"email" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
  if (!regexEmail) {
    throw new CustomError({
      message: '"email" must be a valid email',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const emailAlreadyExists = async (email) => {
  const result = await User.findOne({ where: { email } });
  if (result) {
    throw new CustomError({
      message: 'User already registered',
      status: StatusCodes.CONFLICT,
    });
  }
};

const createUserService = async (displayName, email, password, image) => {
  displayNameValidate(displayName);
  passwordValidate(password);
  emailValidate(email);
  await emailAlreadyExists(email);
  await User.create({ displayName, email, password, image });
  const token = generateToken(email);
  return token;
};

module.exports = createUserService;
