const joi = require("joi");

const name = joi.string().required();
const product = joi.object({
  read: joi.boolean(),
  write: joi.boolean(),
  update: joi.boolean(),
  delete: joi.boolean()
});
const store = joi.object({
  read: joi.boolean(),
  write: joi.boolean(),
  update: joi.boolean(),
  delete: joi.boolean()
});
const user = joi.object({
  read: joi.boolean(),
  write: joi.boolean(),
  update: joi.boolean(),
  delete: joi.boolean()
});
const customer = joi.object({
  read: joi.boolean(),
  write: joi.boolean(),
  update: joi.boolean(),
  delete: joi.boolean()
});
const productCategory = joi.object({
  read: joi.boolean(),
  write: joi.boolean(),
  update: joi.boolean(),
  delete: joi.boolean()
});
const supplier = joi.object({
  read: joi.boolean(),
  write: joi.boolean(),
  update: joi.boolean(),
  delete: joi.boolean()
});
const role = joi.object({
  read: joi.boolean(),
  write: joi.boolean(),
  update: joi.boolean(),
  delete: joi.boolean()
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
  product,
  store,
  user,
  customer,
  product,
  productCategory,
  supplier,
  role
});
