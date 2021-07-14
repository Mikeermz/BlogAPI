const {celebrate, Joi, Segments} = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY] :{
      title: Joi.string().required(),
      body: Joi.string().required(),
      category: Joi.string().required(),
      user_id: Joi.number().integer().required(),
    }
  }),
}