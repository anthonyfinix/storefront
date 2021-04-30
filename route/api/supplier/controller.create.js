const { joi_supplier } = require("../../../validation/joi.supplier");
const createSupplier = require("./createSupplier");
const updateSupplier = require("./updateSupplier");
const nameExists = require("./checkNameExist");
const checkCompanyName = require("./checkCompanyName");
const config = require("../../../config");

module.exports = async (req, res) => {
  // fetch content
  let {
    id,
    company_name,
    name,
    contact_details,
    active,
    total_purchase,
  } = req.body;
  let created_at = Date.now();
  let created_by = req.user._id;
  if (id) {
    let { error, result } = await updateSupplier({
      id,
      company_name,
      name,
      contact_details,
      active,
      total_purchase,
      created_at,
      created_by,
    });
    if (error) return res.json({ error });
    return res.json({ result });
  }
  if (!active) active = config.default_customer_state;
  let { error, message, ...data } = await createSupplier({
    company_name,
    name,
    contact_details,
    active,
    total_purchase,
    created_at,
    created_by,
  });
  if (error) return res.json({ error });
  return res.json({ message, ...data });
};
