const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../helpers/error');
const { User } = require('../models');

const displayNameValidate = (displayName) => {
  const MIN_SIZE_NAME = 8;
  if (displayName.length < MIN_SIZE_NAME) {
    throw new CustomError({
      message: '"displayName" length must be at least 8 characters long',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const passwordValidate = (password) => {
  const MIN_SIZE_PASSWORD = 6;
  if (!password) {
    throw new CustomError({
      message: '"password" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
  if (password.length < MIN_SIZE_PASSWORD) {
    throw new CustomError({
      message: '"password" length must be 6 characters long',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const passwordValidateLogin = (password) => {
  if (password === undefined) {
    throw new CustomError({
      message: '"password" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
  if (password === '') {
    throw new CustomError({
      message: '"password" is not allowed to be empty',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const emailValidate = (email) => {
  const regexEmail = /\S+@\S+\.\S+/.test(email);
  if (!email) {
    throw new CustomError({
      message: '"email" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
  if (!regexEmail) {
    throw new CustomError({
      message: '"email" must be a valid email',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const emailValidateLogin = (email) => {
  if (email === undefined) {
    throw new CustomError({
      message: '"email" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
  if (email === '') {
    throw new CustomError({
      message: '"email" is not allowed to be empty',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const emailAlreadyExists = async (email) => {
  const result = await User.findOne({ where: { email } });
  if (result) {
    throw new CustomError({
      message: 'User already registered',
      status: StatusCodes.CONFLICT,
    });
  }
};

const invalidEmail = (result) => {
  if (result === null) {
    throw new CustomError({
      message: 'Invalid fields',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const nameValidate = (name) => {
  if (!name) {
    throw new CustomError({
      message: '"name" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const fieldsValidate = (title, content, categoryIds) => {
  if (title === undefined) {
    throw new CustomError({
      message: '"title" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
  if (content === undefined) {
    throw new CustomError({
      message: '"content" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
  if (categoryIds === undefined) {
    throw new CustomError({
      message: '"categoryIds" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const fieldsValidateUpdatePost = (title, content) => {
  if (title === undefined) {
    throw new CustomError({
      message: '"title" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
  if (content === undefined) {
    throw new CustomError({
      message: '"content" is required',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const categoryIdsExists = (categoryIds, categories) => {
  if (categoryIds.length !== categories.length) {
    throw new CustomError({
      message: '"categoryIds" not found',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};
// source: github project-blogs-api Anderson M Alves

const fieldCategoryIdsExist = (categoryIds) => {
  if (categoryIds) {
    throw new CustomError({
      message: 'Categories cannot be edited',
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const checkPostExists = (result) => {
  if (result === null) {
    throw new CustomError({
      message: 'Post does not exist',
      status: StatusCodes.NOT_FOUND,
    });
  }
};

const checkUserPost = (userId, blogPost) => {
  if (userId !== blogPost.userId) {
    throw new CustomError({
      message: 'Unauthorized user',
      status: StatusCodes.UNAUTHORIZED,
    });
  }
};

const checkUserExists = (result) => {
  if (result === null) {
    throw new CustomError({
      message: 'User does not exist',
      status: StatusCodes.NOT_FOUND,
    });
  }
};

module.exports = {
  displayNameValidate,
  passwordValidate,
  emailValidate,
  emailValidateLogin,
  emailAlreadyExists,
  passwordValidateLogin,
  invalidEmail,
  nameValidate,
  fieldsValidate,
  fieldsValidateUpdatePost,
  categoryIdsExists,
  checkPostExists,
  checkUserPost,
  checkUserExists,
  fieldCategoryIdsExist,
};
