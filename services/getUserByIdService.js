const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { verifyToken } = require('../middlewares/auth');
const { User } = require('../models');

const checkUserExists = (result) => {
  if (result === null) {
    throw new CustomError({
      message: 'User does not exist',
      status: StatusCodes.NOT_FOUND,
    });
  }
};

const getUserByIdService = async (authorization, id) => {
  verifyToken(authorization);
  const result = await User.findOne({ where: { id } });
  checkUserExists(result);
  return result;
};

module.exports = getUserByIdService;
