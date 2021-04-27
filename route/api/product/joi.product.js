const joi = require("joi");
const joi_id = require('../../../validation/joi._id');
const height = joi.number();
const width= joi.number();
const length= joi.number();
const weight= joi.number();
const product_id = joi_id;
const productName = joi.string();
const sku = joi.string();
const media = joi.array().items({
  name: joi.string().required(),
  src: joi.string().required(),
});
const category = joi.object({
  id: joi.string().required(),
});
const dimension = joi.object({
  height:height.required(),
  width:width.required(),
  length:length.required(),
  weight:weight.required()
});
const manufacturer = joi.string();
const brand = joi.string();
const sale_price = joi.number();
const buying_price = joi.number();
const current_price = joi.number();
const store = joi.object({
  id: joi.string().required(),
  stock: joi.object({
    currentStock: joi.number().required(),
    openingStock: joi.number(),
  }).required(),
})
const stores = joi
  .array()
  .items(store)
  .min(1)
  .required();
const suppliers = joi
  .array()
  .items({
    id: joi.string().required(),
  })
  .min(1);
const active = joi.bool();

exports.joi_product_id = product_id;
exports.joi_product_name = productName;
exports.joi_product_sku = sku;
exports.joi_product_media = media;
exports.joi_product_category = category;
exports.joi_product_dimension = dimension;
exports.joi_product_manufacturer = manufacturer;
exports.joi_product_brand = brand;
exports.joi_product_sale_price = sale_price;
exports.joi_product_buying_price = buying_price;
exports.joi_product_current_price = current_price;
exports.joi_product_stores = stores;
exports.joi_product_height = height;
exports.joi_product_width= width;
exports.joi_product_length= length;
exports.joi_product_weight= weight;
exports.joi_product_suppliers = suppliers
exports.product = joi.object({
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
  suppliers: suppliers.required(),
  active: active.required(),
});
