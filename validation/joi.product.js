const joi = require("joi");

module.exports = joi.object({
  name: joi.string().required(),
  sku: joi.string().required(),
  media: [
    {
      name: joi.string().required(),
      src: joi.string().required()
    }
  ],
  category: joi.object({
    name: joi.string().required(),
    id: joi.string().required()
  }),
  dimension: {
    height: joi.number().required(),
    width: joi.number().required(),
    length: joi.number().required(),
    weight: joi.number().required()
  },
  manufacturer: joi.string().required(),
  brand: joi.string().required(),
  sale_price: joi.number().required(),
  current_price: joi.number().required(),
  buying_price: joi.number().required(),
  stores: joi.array().items(
    joi.object({
      name: joi.string().required(),
      id: joi.string().required(),
      stock: {
        currentStock: joi.number().required(),
        openingStock: joi.number().required(),
        closingStock: joi.number().required()
      }
    })
  ),
  suppliers: joi
    .array()
    .items({
      name: joi.string().required(),
      id: joi.string().required()
    })
    .min(1)
    .required(),
  active: joi.bool()
});
