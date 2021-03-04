const validation = require("../../../validation/joi.supplier");
const createSuppplier = require("./createSuppplier");
const nameExists = require("./checkNameExist");
const { response } = require("express");

module.exports = async (req, res) => {
  // fetch content
  let { name, contact_details, active, total_purchase } = req.body;
  let { error } = validation.validate({
    name,
    contact_details,
    active,
    total_purchase
  });
  if (error) return res.json({ error: error.details });
  if(!!(await nameExists(name)))  return res.json({ error: "name already exist" });

  let created_at = Date.now();
  let created_by = req.user._id;
  if (!active) active = config.default_customer_state;
  let { e, message, ...data } = await createSuppplier({
    name,
    contact_details,
    active,
    total_purchase,
    created_at,
    created_by
  });
  if (e) return res.json({ error: e.message });
  return res.json({ message, ...data });
};
