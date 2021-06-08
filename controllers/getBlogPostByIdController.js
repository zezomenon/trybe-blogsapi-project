const { StatusCodes } = require('http-status-codes');
const { getBlogPostByIdService } = require('../services');

const getBlogPostByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;
    const result = await getBlogPostByIdService(authorization, id);
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    res.status(status).json({ message });
  }
};

module.exports = getBlogPostByIdController;
