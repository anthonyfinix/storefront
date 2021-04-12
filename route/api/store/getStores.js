const Store = require("./modal");
const { store_name, store_id } = require("./joi.store");
const joi_query = require("../../../validation/joi.query");

module.exports = async ({
  query,
  id,
  name,
  contact_details,
  roles,
  gmt,
  currency,
  created_at,
  skip,
  limit
}) => {
  let params = {};
  if (id) {
    let store_id_validation = store_id.validate(id);
    if (store_id_validation.error)
      return { error: store_id_validation.error.details };
    params._id = id;
  }
  if (query) {
    let joi_query_validation = joi_query.validate(query);
    if (joi_query_validation.error)
      return { error: joi_query_validation.error.details };
    params.name = { $regex: new RegExp(`\\w*${query}\\w*`, "g") };
  }
  if (name) {
    let store_name_validation = store_name.validate(name);
    if (store_name_validation.error)
      return { error: store_name_validation.error.details };
    params.name = name;
  }
  // if (contact_details) params.contact_details = contact_details;
  // if (roles) params.roles = roles;
  // if (gmt) params.gmt = gmt;
  // if (currency) params.currency = currency;
  // if (created_at) params.created_at = created_at;
  try {
    let result = await Store
    .find(params)
      .sort("-created_at")
      .skip(skip)
      .limit(limit);
    let count = result.length;
    let message = count < 0 ? "no stores found" : "success";
    return { message, result, count };
  } catch (e) {
    return { error: e.message };
  }
};
