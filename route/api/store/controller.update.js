const validation = require("../../../validation/joi.store");
const getStore = require("./updateStore");
module.exports = async (req, res) => {
  let { id } = req.query;
  let { name, contact_details, roles, gmt, currency, created_at } = req.query;
  let params = {};
  if (name) params.name = name;
  if (contact_details) params.contact_details = contact_details;
  if (roles) params.roles = roles;
  if (gmt) params.gmt = gmt;
  if (currency) params.currency = currency;
  if (created_at) params.created_at = created_at;
  let { error, result, message } = updateStore(params);
  if (error) return res.json({ error });
  return res.json({ message, result });
};
