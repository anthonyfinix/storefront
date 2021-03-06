const Customer = require("./modal");
const { joi_customer } = require("../../../validation/joi.customer");
const nameExists = require("./checkNameExist");
const updateCustomer = require('./updateCustomer')
const createCustomer = require("./createCustomer");
const config = require("../../../config");
module.exports = async (req, res) => {
  let { name, contact_details, store_visited, total_purchase, active, id } = req.body;
  if (id) {
    let { error, result, message } = await updateCustomer({
      name, contact_details, store_visited, total_purchase, active, id
    })
    if (error) return res.json({ error })
    return res.json({ result, message })
  }
  if (!total_purchase) total_purchase = 0;
  let { error } = joi_customer.validate({
    name,
    contact_details,
    store_visited,
    total_purchase,
    active,
  });
  if (error) return res.json({ error: error.details });
  if ((await nameExists(name)).exist)
    return res.json({ error: "name already exist" });
  let last_visit = Date.now();
  let created_by = req.user._id;
  let created_at = Date.now();
  if (!active) active = config.default_customer_state;
  let { e, message, ...data } = await createCustomer({
    name,
    contact_details,
    store_visited,
    total_purchase,
    active,
    last_visit,
    created_at,
    created_by,
  });
  if (e) res.json({ error: e.message });
  return res.json({ message, ...data });
};
