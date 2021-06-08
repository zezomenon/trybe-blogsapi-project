const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { verifyToken, getInfoUser } = require('../middlewares/auth');
const { BlogPost, User, Categorie } = require('../models');

const fieldsValidate = (title, content, categoryIds) => {
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
  if (categoryIds === undefined) {
    throw new CustomError({
      message: '"categoryIds" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const categoryIdsExists = (categoryIds, categories) => {
  if (categoryIds.length !== categories.length) {
    throw new CustomError({
      message: '"categoryIds" not found',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};
// source: github project-blogs-api Anderson M Alves

const createBlogPostService = async (authorization, title, content, categoryIds) => {
  fieldsValidate(title, content, categoryIds);
  verifyToken(authorization);
  const { email } = getInfoUser(authorization);
  const { id } = await User.findOne({ where: { email } });
  const categories = await Categorie.findAll({ where: { id: categoryIds } });
  categoryIdsExists(categoryIds, categories);
  console.log(id, title, content);
  const result = await BlogPost
    .create({ title, content, userId: id, published: Date.now(), updated: Date.now() });
   
  return { id: result.id, userId: result.userId, title, content };
};

module.exports = createBlogPostService;
