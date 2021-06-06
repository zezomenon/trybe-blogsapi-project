const { verifyToken } = require('../middlewares/auth');
const { Categorie } = require('../models');

const getCategoriesService = async (authorization) => {
  verifyToken(authorization);
  const result = await Categorie.findAll();
  return result;
};

module.exports = getCategoriesService;
