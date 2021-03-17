const joi = require("joi");

const productName = joi.string();
const sku = joi.string();
const media = joi.array().items({
  name: joi.string().required(),
  src: joi.string().required()
});
const category = joi.object({
  name: joi.string().required(),
  id: joi.string().required()
});
const dimension = joi.object({
  height: joi.number().required(),
  width: joi.number().required(),
  length: joi.number().required(),
  weight: joi.number().required()
});
const manufacturer = joi.string();
const brand = joi.string();
const sale_price = joi.number();
const buying_price = joi.number();
const current_price = joi.number();
const stores = joi.array().items(
  joi.object({
    name: joi.string().required(),
    id: joi.string().required(),
    stock: {
      currentStock: joi.number().required(),
      openingStock: joi.number().required(),
      closingStock: joi.number().required()
    }
  })
).min(1).required();
const supplier = joi
  .array()
  .items({
    name: joi.string().required(),
    id: joi.string().required()
  })
  .min(1);
const active = joi.bool();

exports.product_productName = productName;
exports.product_sku = sku;
exports.product_media = media;
exports.product_category = category;
exports.product_dimension = dimension;
exports.product_manufacturer = manufacturer;
exports.product_brand = brand;
exports.product_sale_price = sale_price;
exports.product_buying_price = buying_price;
exports.product_current_price = current_price;
exports.product_stores = stores;

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
  active:active.required()
});
