const joi = require("joi");

exports = productName = joi.string();
exports = sku = joi.string();
exports = media = joi.array().items({
  name: joi.string().required(),
  src: joi.string().required()
});
exports = category = joi.object({
  name: joi.string().required(),
  id: joi.string().required()
});
exports = dimension = joi.object({
  height: joi.number().required(),
  width: joi.number().required(),
  length: joi.number().required(),
  weight: joi.number().required()
});
exports = manufacturer = joi.string();
exports = brand = joi.string();
exports = sale_price = joi.number();
exports = buying_price = joi.number();
exports = current_price = joi.number();
exports = stores = joi.array().items(
  joi.object({
    name: joi.string().required(),
    id: joi.string().required(),
    stock: {
      currentStock: joi.number().required(),
      openingStock: joi.number().required(),
      closingStock: joi.number().required()
    }
  })
);
exports = supplier = joi
  .array()
  .items({
    name: joi.string().required(),
    id: joi.string().required()
  })
  .min(1);
exports = active = joi.bool();

module.exports = joi.object({
  name: productName,
  sku: sku.required(),
  media: media,
  category: category.required(),
  dimension: dimension.required(),
  manufacturer: manufacturer.required(),
  brand: brand.required(),
  sale_price: sale_price.required(),
  current_price: current_price.required(),
  buying_price: buying_price.required(),
  stores: stores,
  suppliers: supplier.required(),
  active
});
