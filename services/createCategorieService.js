const { verifyToken } = require('../middlewares/auth');
const validations = require('../middlewares/validations');
const { Categorie } = require('../models');

const createCategorieService = async (authorization, name) => {
  validations.nameValidate(name);
  verifyToken(authorization);
  const result = await Categorie.create({ name });
  return result;
};

module.exports = createCategorieService;
