const { StatusCodes } = require('http-status-codes');
const { createBlogPostService } = require('../services');

const createBlogPostController = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { authorization } = req.headers;
    const result = await createBlogPostService(authorization, title, content, categoryIds);
    res.status(StatusCodes.CREATED).json(result);
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    res.status(status).json({ message });
  }
};

module.exports = createBlogPostController;
