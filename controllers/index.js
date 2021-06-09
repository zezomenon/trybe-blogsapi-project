const createUserController = require('./createUserController');
const loginUserController = require('./loginUserController');
const getUsersController = require('./getUsersController');
const getUserByIdController = require('./getUserByIdController');
const createCategorieController = require('./createCategorieController');
const getCategoriesController = require('./getCategoriesController');
const createBlogPostController = require('./createBlogPostController');
const getBlogPostsController = require('./getBlogPostsController');
const getBlogPostByIdController = require('./getBlogPostByIdController');
const updateBlogPostController = require('./updateBlogPostController');
const deleteBlogPostController = require('./deleteBlogPostController');

module.exports = {
  createUserController,
  loginUserController,
  getUsersController,
  getUserByIdController,
  createCategorieController,
  getCategoriesController,
  createBlogPostController,
  getBlogPostsController,
  getBlogPostByIdController,
  updateBlogPostController,
  deleteBlogPostController,
};
