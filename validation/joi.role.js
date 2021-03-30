const joi = require("joi");

const _id = require("../validation/joi._id");
const name = joi.string().required();
const product = joi.object({
  read: joi.boolean(),
  write: joi.boolean(),
  update: joi.boolean(),
  delete: joi.boolean(),
});
const store = joi.object({
  read: joi.boolean(),
  write: joi.boolean(),
  update: joi.boolean(),
  delete: joi.boolean(),
});
const user = joi.object({
  read: joi.boolean(),
  write: joi.boolean(),
  update: joi.boolean(),
  delete: joi.boolean(),
});
const customer = joi.object({
  read: joi.boolean(),
  write: joi.boolean(),
  update: joi.boolean(),
  delete: joi.boolean(),
});
const productCategory = joi.object({
  read: joi.boolean(),
  write: joi.boolean(),
  update: joi.boolean(),
  delete: joi.boolean(),
});
const supplier = joi.object({
  read: joi.boolean(),
  write: joi.boolean(),
  update: joi.boolean(),
  delete: joi.boolean(),
});
const role = joi.object({
  read: joi.boolean(),
  write: joi.boolean(),
  update: joi.boolean(),
  delete: joi.boolean(),
});

exports.joi_role_id = _id;
exports.joi_role_name = name;
exports.joi_role_role = role;
exports.joi_role_productCategory = productCategory;
exports.joi_role_product = product;
exports.joi_role_supplier = supplier;
exports.joi_role_customer = customer;
exports.joi_role_user = user;
exports.joi_role_store = store;

module.exports.joi_role = joi.object({
  name: name.required(),
  product,
  store,
  user,
  customer,
  product,
  productCategory,
  supplier,
  role,
});
