const Customer = require("./modal");
const validator = require("../../../validation/joi.customer");
const nameExists = require("./checkNameExist");
const createCustomer = require("./createCustomer");
const config = require("../../../config");
module.exports = async (req, res) => {
  let {
    name,
    contact_details,
    store_visited,
    total_purchase,
    active
  } = req.body;
  let { error } = validator.validate({
    name,
    contact_details,
    store_visited,
    total_purchase,
    active
  });
  if (error) return res.json({ error: error.details });
  if ((await nameExists(name)).exist)
    return res.json({ error: "name already exist" });
  let last_visit = Date.now();
  let created_by = req.user._id;
  if (!active) active = config.default_customer_state;
  let { e, message, ...data } = await createCustomer({
    name,
    contact_details,
    store_visited,
    total_purchase,
    active,
    last_visit,
    created_at,
    created_by
  });
  if (e) res.json({ error: e.message });
  return res.json({ message, ...data });
};
