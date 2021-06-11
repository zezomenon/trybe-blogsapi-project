const { verifyToken, getInfoUser } = require('../middlewares/auth');
const validations = require('../middlewares/validations');
const { BlogPost, User, Categorie } = require('../models');

const updateBlogPostService = async (authorization, id, post) => {
  const { title, content, categoryIds } = post;
  validations.fieldsValidateUpdatePost(title, content);
  validations.fieldCategoryIdsExist(categoryIds);
  verifyToken(authorization);
  const { email } = getInfoUser(authorization);
  const user = await User.findOne({ where: { email } });
  
  const blogPost = await BlogPost.findOne({ where: { id },
    include: [ 
      { model: User, as: 'user' },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
  });

  validations.checkUserPost(user.id, blogPost);
  
  await BlogPost.update({ title, content }, { where: { id } });
  return { title, content, userId: user.id, categories: blogPost.categories };
};

module.exports = updateBlogPostService;
