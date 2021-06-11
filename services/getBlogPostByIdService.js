const { verifyToken } = require('../middlewares/auth');
const validations = require('../middlewares/validations');
const { BlogPost, User, Categorie } = require('../models');

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
  validations.checkPostExists(result);
  return result;
};

module.exports = getBlogPostByIdService;
