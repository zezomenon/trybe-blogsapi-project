const { StatusCodes } = require('http-status-codes');
const { createUserService } = require('../services');

const createUserController = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const result = await createUserService(displayName, email, password, image);
    res.status(StatusCodes.CREATED).json({ token: result });
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    res.status(status).json({ message });
  }
};

module.exports = createUserController;
