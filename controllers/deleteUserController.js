const { StatusCodes } = require('http-status-codes');
const { deleteUserService } = require('../services');

const deleteUserController = async (req, res) => {
  try {
    const { authorization } = req.headers;
    await deleteUserService(authorization);
    res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    res.status(status).json({ message });
  }
};

module.exports = deleteUserController;
