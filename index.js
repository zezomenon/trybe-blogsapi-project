const express = require('express');
const {
  createUserRoute,
  loginUserRoute,
  getUsersRoute,
} = require('./routes');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', createUserRoute);
app.use('/login', loginUserRoute);
app.use('/user', getUsersRoute);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
