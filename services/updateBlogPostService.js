const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { verifyToken, getInfoUser } = require('../middlewares/auth');
const { BlogPost, User, Categorie } = require('../models');

const fieldsValidate = (title, content) => {
  if (title === undefined) {
    throw new CustomError({
      message: '"title" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
  if (content === undefined) {
    throw new CustomError({
      message: '"content" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const fieldCategoryIdsExist = (categoryIds) => {
  if (categoryIds) {
    throw new CustomError({
      message: 'Categories cannot be edited',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const checkUserPost = (userId, blogPost) => {
  console.log(userId);
  if (userId !== blogPost.userId) {
    throw new CustomError({
      message: 'Unauthorized user',
      status: StatusCodes.UNAUTHORIZED,
    });
  }
};

const updateBlogPostService = async (authorization, id, post) => {
  const { title, content, categoryIds } = post;
  fieldsValidate(title, content);
  fieldCategoryIdsExist(categoryIds);
  verifyToken(authorization);
  const { email } = getInfoUser(authorization);
  const user = await User.findOne({ where: { email } });
  
  const blogPost = await BlogPost.findOne({ where: { id },
    include: [ 
      { model: User, as: 'user' },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
  });

  checkUserPost(user.id, blogPost);
  
  await BlogPost.update({ title, content }, { where: { id } });
  return { title, content, userId: user.id, categories: blogPost.categories };
};

module.exports = updateBlogPostService;
