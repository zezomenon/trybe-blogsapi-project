const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { verifyToken, getInfoUser } = require('../middlewares/auth');
const { BlogPost, User } = require('../models');

const checkPostExists = (result) => {
  if (result === null) {
    throw new CustomError({
      message: 'Post does not exist',
      status: StatusCodes.NOT_FOUND,
    });
  }
};

const checkUserPost = (userId, blogPost) => {
  if (userId !== blogPost.userId) {
    throw new CustomError({
      message: 'Unauthorized user',
      status: StatusCodes.UNAUTHORIZED,
    });
  }
};

const deleteBlogPostService = async (authorization, id) => {
  verifyToken(authorization);
  const { email } = getInfoUser(authorization);
  const user = await User.findOne({ where: { email } });
  
  const blogPost = await BlogPost.findOne({ where: { id } });

  checkPostExists(blogPost);
  checkUserPost(user.id, blogPost);
  
  await BlogPost.destroy({ where: { id } });
  return true;
};

module.exports = deleteBlogPostService;
