const joi = require("joi");
const id = require("./joi._id");
const store = id;
const customer = id;
const amount = joi.object({
  total: joi.number().required(),
  discount: joi.string(),
});
const product = joi
  .array()
  .items(
    joi.object({
      id: id.required(),
      qty: joi.number().required(),
    })
  )
  .min(1);

exports.purchase_store = store;
exports.purchase_customer = customer;
exports.purchase_amount = amount;
exports.purchase_product = product;
module.exports.joi_purchase = joi.object({
  customer: customer.required(),
  product: product.required(),
  store: store.required(),
  amount: amount.required(),
});
