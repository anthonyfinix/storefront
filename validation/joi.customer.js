const joi = require("joi");
const _id = require("./joi._id");
const { name } = require("./joi.name");
const { joi_contact_details } = require("./joi.contact_details");
const store_visited = joi.array().items(joi.string().required());
const total_purchase = joi.object({
  amount: joi.number().required(),
});
const active = joi.boolean();

exports.joi_customer_id = _id;
exports.joi_customer_name = name;
exports.joi_customer_contact_details = joi_contact_details;
exports.joi_customer_store_visited = store_visited;
exports.joi_customer_total_purchase = total_purchase;
exports.joi_customer_active = active;
exports.joi_customer = joi.object({
  name: name.required(),
  store_visited: store_visited.required(),
  total_purchase: total_purchase.required(),
  contact_details: joi_contact_details.required(),
  active: active,
});
