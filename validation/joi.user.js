const joi = require("joi");
const name = require("./joi.name");
const {joi_contact_details} = require("./joi.contact_details");
const username = joi.string();
const password = joi.string();
const employeeId = joi.string();
const active = joi.boolean();
const role = joi.string();
const documents = joi.array().items(
    joi.object({ name: joi.string().required(), path: joi.string().required() })
  ).allow("");
const assigned_store = joi.object({ id: joi.string(), name: joi.string() });

exports.user_name = name;
exports.user_username = username;
exports.user_contact_details = joi_contact_details;
exports.user_active = active;
exports.employeeId = employeeId;
exports.user_role = role;
exports.assigned_store = assigned_store;
exports.user_documents = documents;

module.exports = joi.object({
  name: joi.required(),
  username: username.required(),
  password: password.required(),
  contact_details: joi_contact_details.required(),
  employeeId: joi.string(),
  active: active.required(),
  role: joi.string(),
  assigned_store: assigned_store,
  documents: documents
});
