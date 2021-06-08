const jwt = require('jsonwebtoken');
require('dotenv').config();
const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { User } = require('../models');

const JWT_SECRET = process.env.JWT_SECRET || '123456';

const generateToken = async (userEmail) => {
  const { dataValues } = await User.findOne({ where: { email: userEmail } });
  const { email, password } = dataValues;
  const payload = { email, password };
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};

const verifyToken = (authorization) => {
  if (!authorization) {
    throw new CustomError({
      message: 'Token not found',
      status: StatusCodes.UNAUTHORIZED,
    });
  }
  jwt.verify(authorization, JWT_SECRET, (err, decoded) => {
    if (err) {
      throw new CustomError({
        message: 'Expired or invalid token',
        status: StatusCodes.UNAUTHORIZED,
      });
    }
    const { email } = decoded;
    return email;
  });
};

const getInfoUser = (authorization) => {
  const result = jwt.verify(authorization, JWT_SECRET);
  return result;
};

module.exports = { generateToken, verifyToken, getInfoUser };
