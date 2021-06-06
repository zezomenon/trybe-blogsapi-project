const { StatusCodes } = require('http-status-codes');
const { getCategoriesService } = require('../services');

const getCategoriesController = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const result = await getCategoriesService(authorization);
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    res.status(status).json({ message });
  }
};

module.exports = getCategoriesController;
