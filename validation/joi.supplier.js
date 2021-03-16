const joi = require("joi");
const contact_details = require("./joi.contact_details");
const name = require("./joi.name");

let company_name = joi.string();
let created_by = joi.string();
let created_on = joi.number();
let total_purchase = joi.number();

exports.supplier_company_name = company_name;
exports.supplier_created_by = created_by;
exports.supplier_created_on = created_on;
exports.supplier_total_purchase = total_purchase;
exports.supplier_contact_details = contact_details;

module.exports = joi.object({
  company_name: company_name.required(),
  name: name.required(),
  contact_details: contact_details.required(),
  active: joi.boolean(),
  created_by: created_by,
  created_on: created_on,
  total_purchase: total_purchase
});
