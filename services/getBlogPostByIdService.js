const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { verifyToken } = require('../middlewares/auth');
const { BlogPost, User, Categorie } = require('../models');

const checkPostExists = (result) => {
  if (result === null) {
    throw new CustomError({
      message: 'Post does not exist',
      status: StatusCodes.NOT_FOUND,
    });
  }
};

const getBlogPostByIdService = async (authorization, id) => {
  verifyToken(authorization);
  const result = await BlogPost.findOne({ where: { id },
    include: [
      {
        model: User,
        as: 'user',
      },
      {
        model: Categorie,
        as: 'categories',
        through: {
          attributes: [],
        },
      },
    ],
  });
  checkPostExists(result);
  return result;
};

module.exports = getBlogPostByIdService;
