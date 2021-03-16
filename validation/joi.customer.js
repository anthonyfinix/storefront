const joi = require("joi");
const name = require("./joi.name");
const contact_details = require("./joi.contact_details");
const store_visited = joi.array().items({
  id: joi.string().required(),
  name: joi.string().required()
});
const total_purchase = joi.object({
  amount: joi.number().required()
});
const active = joi.boolean();

exports.customer_name = name;
exports.customer_contact_details = contact_details;
exports.customer_store_visited = store_visited;
exports.customer_total_purchase = total_purchase;
exports.customer_active = active;

module.exports = joi.object({
  name: name.required(),
  store_visited: store_visited.required(),
  total_purchase: total_purchase.required(),
  contact_details: contact_details.required(),
  active: active.required()
});
