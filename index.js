const express = require('express');
const {
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
} = require('./routes');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', 
  createUserRoute,
  getUsersRoute,
  getUserByIdRoute);
app.use('/login', loginUserRoute);
app.use('/categories', 
  createCategorieRoute,
  getCategoriesRoute);
app.use('/post',
  createBlogPostRoute,
  getBlogPostsRoute,
  getBlogPostByIdRoute,
  updateBlogPostRoute,
  deleteBlogPostRoute);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
