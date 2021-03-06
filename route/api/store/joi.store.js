const joi = require("joi");
const _id = require("../../../validation/joi._id");
const {
  joi_contact_details,
} = require("../../../validation/joi.contact_details");
const name = joi.string();
const roles = joi.array().items(joi.string()).min(1);
const gmt = joi.string();
const currency = joi.string();

exports.store_id = _id;
exports.store_name = name;
exports.store_roles = roles;
exports.store_gmt = gmt;
exports.store_currency = currency;

module.exports.store = joi.object({
  name: name.required(),
  contact_details: joi_contact_details.required(),
  active: joi.boolean(),
  roles: roles.required(),
  gmt: gmt.required(),
  currency: currency.required(),
});
