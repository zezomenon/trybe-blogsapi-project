const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');

const generateToken = async (userEmail) => {
  const { dataValues } = await User.findOne({ where: { email: userEmail } });
  const { email, password } = dataValues;
  const payload = { email, password };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

module.exports = { generateToken };
