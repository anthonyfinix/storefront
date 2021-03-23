const Store = require("./modal");

module.exports = async ({
  name,
  contact_details,
  roles,
  gmt,
  currency,
  created_at
}) => {
  let params;
  if (name) params.name = name;
  if (contact_details) params.contact_details = contact_details;
  if (roles) params.roles = roles;
  if (gmt) params.gmt = gmt;
  if (currency) params.currency = currency;
  if (created_at) params.created_at = created_at;
  try {
    let result = await Store.find(params);
    let count = result.length;
    let message = count < 0 ? "no stores found" : "success";
    return { message, result, count };
  } catch (e) {
    return { error: e.message };
  }
};
