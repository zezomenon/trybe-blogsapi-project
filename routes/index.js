const createUserRoute = require('./createUserRoute');
const loginUserRoute = require('./loginUserRoute');
const getUsersRoute = require('./getUsersRoute');
const getUserByIdRoute = require('./getUserByIdRoute');
const createCategorieRoute = require('./createCategorieRoute');
const getCategoriesRoute = require('./getCategoriesRoute');
const createBlogPostRoute = require('./createBlogPostRoute');
const getBlogPostsRoute = require('./getBlogPostsRoute');
const getBlogPostByIdRoute = require('./getBlogPostByIdRoute');
const updateBlogPostRoute = require('./updateBlogPostRoute');
const deleteBlogPostRoute = require('./deleteBlogPostRoute');

module.exports = {
  createUserRoute,
  loginUserRoute,
  getUsersRoute,
  getUserByIdRoute,
  createCategorieRoute,
  getCategoriesRoute,
  createBlogPostRoute,
  getBlogPostsRoute,
  getBlogPostByIdRoute,
  updateBlogPostRoute,
  deleteBlogPostRoute,
};
