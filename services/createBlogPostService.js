const { verifyToken, getInfoUser } = require('../middlewares/auth');
const validations = require('../middlewares/validations');
const { BlogPost, User, Categorie } = require('../models');

const createBlogPostService = async (authorization, title, content, categoryIds) => {
  validations.fieldsValidate(title, content, categoryIds);
  verifyToken(authorization);
  const { email } = getInfoUser(authorization);
  const { id } = await User.findOne({ where: { email } });
  const categories = await Categorie.findAll({ where: { id: categoryIds } });
  validations.categoryIdsExists(categoryIds, categories);
  console.log(id, title, content);
  const result = await BlogPost
    .create({ title, content, userId: id, published: Date.now(), updated: Date.now() });
   
  return { id: result.id, userId: result.userId, title, content };
};

module.exports = createBlogPostService;
