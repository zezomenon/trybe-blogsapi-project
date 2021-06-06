const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { verifyToken } = require('../middlewares/auth');
const { Categorie } = require('../models');

const nameValidate = (name) => {
  if (!name) {
    throw new CustomError({
      message: '"name" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const createCategorieService = async (authorization, name) => {
  nameValidate(name);
  verifyToken(authorization);
  const result = await Categorie.create({ name });
  return result;
};

module.exports = createCategorieService;
