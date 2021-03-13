const Customer = require("./modal");
const getCustomer = async ({
  name,
  contact_details,
  total_purchase,
  last_visit,
  active,
  created_by,
  created_at
}) => {
  let params = {};
  if (name) params.name = name;
  if (contact_details) params.contact_details = contact_details;
  if (total_purchase) params.total_purchase = total_purchase;
  if (last_visit) params.last_visit = last_visit;
  if (active) params.active = active;
  if (created_at) params.created_at = created_at;
  if (created_by) params.created_by = created_by;
  try {
    let result = await Customer.find(params);
    return { message: "success", result };
  } catch (e) {
    return { error: e.message };
  }
};

module.exports = getCustomer;
