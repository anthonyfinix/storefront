const validation = require("../../../validation/joi.supplier");
const updateSupplier = require("./updateSupplier");
const checkCompanyName = require("./checkCompanyName");
const config = require("../../../config");

module.exports = async (req, res) => {
  // fetch content
  let { id } = req.params;
  let {
    company_name,
    name,
    contact_details,
    active,
    total_purchase
  } = req.body;
  
  if (!!(await checkCompanyName(company_name)))
  return res.json({ error: "company name already exist" });

  let params = { id };
  if (company_name) params.company_name = company_name;
  if (name) params.name = name;
  if (contact_details) params.contact_details = contact_details;
  if (active) params.active = active;
  if (total_purchase) params.total_purchase = total_purchase;
  let { error, message, result } = await updateSupplier(params);
  if (error) res.json({ error });
  return res.json({ message, result });
};
