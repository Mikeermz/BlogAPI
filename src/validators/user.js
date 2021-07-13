const {celebrate, Joi, Segments} = require('celebrate');

module.exports = {
  login: celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }
  }),
  create: celebrate({
    [Segments.BODY] :{
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().email().required(),
      birth_date: Joi.date(),
      gender: Joi.string().valid('male','female', 'other'),
      password: Joi.string().required(),
    } //schema de validacion
  }),
  findOne: celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    }
  }),
}