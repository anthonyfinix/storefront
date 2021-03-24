const Customer = require("./modal");
const validation = require("../../../validation/joi.customer");
const getCustomer = async ({
  id,
  name,
  contact_details,
  total_purchase,
  last_visit,
  active,
  created_by,
  created_at,
  store_visited
}) => {
  let params = {};
  if (id) param._id = id;
  if (name) params["name.first_name"] = name;
  // if (contact_details) params.contact_details = contact_details;
  // if (total_purchase) params.total_purchase = total_purchase;
  // if (last_visit) params.last_visit = last_visit;
  // if (active) params.active = active;
  // if (store_visited) params.store_visited = store_visited;
  // if (created_at) params.created_at = created_at;
  // if (created_by) params.created_by = created_by;
  try {
    let result = await Customer.find(params);
    let count = result.length;
    if (count <= 0) return { message: "no product found", result, count };
    return { message: "success", result, count };
  } catch (e) {
    return { error: e.message };
  }
};

module.exports = getCustomer;
