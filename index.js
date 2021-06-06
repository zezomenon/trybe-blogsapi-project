const express = require('express');
const {
  createUserRoute,
  loginUserRoute,
  getUsersRoute,
  getUserByIdRoute,
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

app.listen(3000, () => console.log('ouvindo porta 3000!'));
