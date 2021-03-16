const joi = require("joi");

const name = joi.string();
const product = joi.object({
  read: joi.boolean().required(),
  write: joi.boolean().required(),
  update: joi.boolean().required(),
  delete: joi.boolean().required()
});
const store = joi.object({
  read: joi.boolean().required(),
  write: joi.boolean().required(),
  update: joi.boolean().required(),
  delete: joi.boolean().required()
});
const user = joi.object({
  read: joi.boolean().required(),
  write: joi.boolean().required(),
  update: joi.boolean().required(),
  delete: joi.boolean().required()
});
const customer = joi.object({
  read: joi.boolean().required(),
  write: joi.boolean().required(),
  update: joi.boolean().required(),
  delete: joi.boolean().required()
});
const productCategory = joi.object({
  read: joi.boolean().required(),
  write: joi.boolean().required(),
  update: joi.boolean().required(),
  delete: joi.boolean().required()
});
const supplier = joi.object({
  read: joi.boolean().required(),
  write: joi.boolean().required(),
  update: joi.boolean().required(),
  delete: joi.boolean().required()
});
const role = joi.object({
  read: joi.boolean().required(),
  write: joi.boolean().required(),
  update: joi.boolean().required(),
  delete: joi.boolean().required()
});

exports.role_name = name;
exports.role_role = role;
exports.role_productCategory = productCategory;
exports.role_product = product;
exports.role_supplier = supplier;
exports.role_customer = customer;
exports.role_user = user;
exports.role_store = store;

module.exports = joi.object({
  name: name.required(),
  product: product.required(),
  store: store.required(),
  user: user.required(),
  customer: customer.required(),
  product: product.required(),
  productCategory: productCategory.required(),
  supplier: supplier.required(),
  role: role.required()
});
