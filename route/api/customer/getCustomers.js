const Customer = require("./modal");
const { joi_first_name } = require("../../../validation/joi.name");
const {
  joi_customer_id,
  joi_customer_name
} = require("../../../validation/joi.customer");
const getCustomer = async ({
  id,
  name,
  contact_details,
  total_purchase,
  last_visit,
  active,
  created_by,
  created_at,
  store_visited,
  skip,
  limit,
  query
}) => {
  let params = {};
  if (id) {
    const joi_customer_id_validation = joi_customer_id.validate(id);
    if (joi_customer_id_validation.error)
      return joi_customer_id_validation.error.details;
    param._id = id;
  }
  if (name) {
    const joi_first_name_validation = joi_first_name.validate(name);
    if (joi_first_name_validation.error)
      return joi_first_name_validation.error.details;
    if (name) params["name.first_name"] = name;
  }
  // if (contact_details) params.contact_details = contact_details;
  // if (total_purchase) params.total_purchase = total_purchase;
  // if (last_visit) params.last_visit = last_visit;
  // if (active) params.active = active;
  // if (store_visited) params.store_visited = store_visited;
  // if (created_at) params.created_at = created_at;
  // if (created_by) params.created_by = created_by;
  try {
    let result = await Customer.find(params)
      .skip(skip)
      .limit(limit);
    let count = result.length;
    if (count <= 0) return { message: "no customer found", result, count };
    return { message: "success", result, count };
  } catch (e) {
    return { error: e.message };
  }
};

module.exports = getCustomer;
