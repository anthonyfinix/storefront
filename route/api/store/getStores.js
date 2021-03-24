const Store = require("./modal");
const { store_name } = require("./joi.store");

module.exports = async ({
  id,
  name,
  contact_details,
  roles,
  gmt,
  currency,
  created_at,
}) => {
  let params = {};
  if(id) params._id = id;
  if(name){
    let store_name_valid = store_name.validate(name);
    if (store_name_valid.error) return { error: store_name_valid.error };
    params.name = name;
  }
  // if (contact_details) params.contact_details = contact_details;
  // if (roles) params.roles = roles;
  // if (gmt) params.gmt = gmt;
  // if (currency) params.currency = currency;
  // if (created_at) params.created_at = created_at;
  try {
    let result = await Store.find(params);
    let count = result.length;
    let message = count < 0 ? "no stores found" : "success";
    return { message, result, count };
  } catch (e) {
    return { error: e.message };
  }
};
