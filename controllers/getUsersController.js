const { StatusCodes } = require('http-status-codes');
const { getUsersService } = require('../services');

const getUsersController = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const result = await getUsersService(authorization);
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    res.status(status).json({ message });
  }
};

module.exports = getUsersController;
