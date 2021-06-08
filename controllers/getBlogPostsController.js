const { StatusCodes } = require('http-status-codes');
const { getBlogPostsService } = require('../services');

const getBlogPostsController = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const result = await getBlogPostsService(authorization);
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    res.status(status).json({ message });
  }
};

module.exports = getBlogPostsController;
