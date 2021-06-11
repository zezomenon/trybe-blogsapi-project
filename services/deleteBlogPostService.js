const { verifyToken, getInfoUser } = require('../middlewares/auth');
const validations = require('../middlewares/validations');
const { BlogPost, User } = require('../models');

const deleteBlogPostService = async (authorization, id) => {
  verifyToken(authorization);
  const { email } = getInfoUser(authorization);
  const user = await User.findOne({ where: { email } });
  
  const blogPost = await BlogPost.findOne({ where: { id } });

  validations.checkPostExists(blogPost);
  validations.checkUserPost(user.id, blogPost);
  
  await BlogPost.destroy({ where: { id } });
  return true;
};

module.exports = deleteBlogPostService;
