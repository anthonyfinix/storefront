const joi = require("joi");
const store = joi.object({
  name: joi.string().required(),
  id: joi.string().required()
});
const customer = joi.object({
  name: joi.string().required(),
  id: joi.string().required()
});
const amount = joi.object({
  price: joi.number().required(),
  discount_amount: joi.string()
});
const product = joi
  .array()
  .items({
    name: joi.string().required(),
    product_id: joi.string().required()
  })
  .min(1);

exports.purchase_store = store;
exports.purchase_customer = customer;
exports.purchase_amount = amount;
exports.purchase_product = product;
module.exports = joi.object({
  store: store.required(),
  customer: customer.required(),
  amount: amount.required(),
  product: product.required(),
  active: joi.bool()
});
