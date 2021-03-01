const joi = require("joi");

module.exports = joi.object({
  store: joi
    .object({
      name: joi.string().required(),
      id: joi.string().required()
    })
    .required(),
  customer: joi
    .object({
      name: joi.string().required(),
      id: joi.string().required()
    })
    .required(),
  amount: joi
    .object({
      price: joi.number().required(),
      discount_amount: joi.string()
    })
    .required(),
  product: joi
    .array()
    .items({
      name: joi.string().required(),
      product_id: joi.string().required()
    })
    .required()
    .min(1),
  active: joi.bool(),
});
