const { StatusCodes } = require('http-status-codes');
const { updateBlogPostService } = require('../services');

const updateBlogPostController = async (req, res) => {
  try {
    const { id } = req.params;
    const post = req.body;
    const { authorization } = req.headers;
    const result = await updateBlogPostService(authorization, id, post);
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    res.status(status).json({ message });
  }
};

module.exports = updateBlogPostController;
