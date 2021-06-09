const { StatusCodes } = require('http-status-codes');
const { deleteBlogPostService } = require('../services');

const deleteBlogPostController = async (req, res) => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;
    await deleteBlogPostService(authorization, id);
    res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    res.status(status).json({ message });
  }
};

module.exports = deleteBlogPostController;
