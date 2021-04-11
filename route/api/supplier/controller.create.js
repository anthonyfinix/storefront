const {joi_supplier} = require("../../../validation/joi.supplier");
const createSupplier = require("./createSupplier");
const nameExists = require("./checkNameExist");
const checkCompanyName = require("./checkCompanyName");
const config = require('../../../config');

module.exports = async (req, res) => {
  // fetch content
  let {company_name, name, contact_details, active, total_purchase } = req.body;
  let { error } = joi_supplier.validate({
    company_name,
    name,
    contact_details,
    active,
    total_purchase
  });
  if (error) return res.json({ error: error.details });
  if(!!(await nameExists(name)))  return res.json({ error: "name already exist" });
  if(!!(await checkCompanyName(company_name)))  return res.json({ error: "company name already exist" });

  let created_at = Date.now();
  let created_by = req.user._id;
  if (!active) active = config.default_customer_state;
  let { e, message, ...data } = await createSupplier({
    company_name,
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
