const joi = require("joi");

module.exports = joi.object({
  name:joi.string().required(),
  product: joi.object({
    read: joi.boolean().required(),
    write: joi.boolean().required(),
    update: joi.boolean().required(),
    delete: joi.boolean().required(),
  }),
  store: joi.object({
    read: joi.boolean().required(),
    write: joi.boolean().required(),
    update: joi.boolean().required(),
    delete: joi.boolean().required(),
  }),
  user: joi.object({
    read: joi.boolean().required(),
    write: joi.boolean().required(),
    update: joi.boolean().required(),
    delete: joi.boolean().required(),
  }),
  customer: joi.object({
    read: joi.boolean().required(),
    write: joi.boolean().required(),
    update: joi.boolean().required(),
    delete: joi.boolean().required(),
  }),
  product: joi.object({
    read: joi.boolean().required(),
    write: joi.boolean().required(),
    update: joi.boolean().required(),
    delete: joi.boolean().required(),
  }),
  productCategory: joi.object({
    read: joi.boolean().required(),
    write: joi.boolean().required(),
    update: joi.boolean().required(),
    delete: joi.boolean().required(),
  }),
  supplier: joi.object({
    read: joi.boolean().required(),
    write: joi.boolean().required(),
    update: joi.boolean().required(),
    delete: joi.boolean().required(),
  }),
  role: joi.object({
    read: joi.boolean().required(),
    write: joi.boolean().required(),
    update: joi.boolean().required(),
    delete: joi.boolean().required(),
  })
});
