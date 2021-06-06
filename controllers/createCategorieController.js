const { StatusCodes } = require('http-status-codes');
const { createCategorieService } = require('../services');

const createCategorieController = async (req, res) => {
  try {
    const { name } = req.body;
    const { authorization } = req.headers;
    const result = await createCategorieService(authorization, name);
    res.status(StatusCodes.CREATED).json(result);
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    res.status(status).json({ message });
  }
};

module.exports = createCategorieController;
