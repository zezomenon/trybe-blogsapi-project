const { verifyToken } = require('../middlewares/auth');
const { BlogPost, User, Categorie } = require('../models');

const getBlogPostsService = async (authorization) => {
  verifyToken(authorization);
  const result = await BlogPost.findAll({
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
  return result;
};
// source: https://sequelize.org/master/manual/eager-loading.html - como usar find* com eager-loading
module.exports = getBlogPostsService;
