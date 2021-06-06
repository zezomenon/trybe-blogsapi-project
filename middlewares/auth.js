const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');

const JWT_SECRET = process.env.JWT_SECRET || '123456';

const generateToken = async (userEmail) => {
  const { dataValues } = await User.findOne({ where: { email: userEmail } });
  const { email, password } = dataValues;
  const payload = { email, password };
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};

module.exports = { generateToken };
