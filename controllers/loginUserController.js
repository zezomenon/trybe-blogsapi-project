const { StatusCodes } = require('http-status-codes');
const { loginUserService } = require('../services');

const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginUserService(email, password);
    res.status(StatusCodes.OK).json({ token: result });
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    res.status(status).json({ message });
  }
};

module.exports = loginUserController;
