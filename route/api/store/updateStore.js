const Store = require("./modal");

module.exports = async ({
  id,
  name,
  contact_details,
  roles,
  gmt,
  currency,
  created_at
}) => {
  let store = await Store.findOne({ _id: id });
  if (!store) return { error: "no store found" };
  let params;
  if (name) store.name = name;
  if (contact_details) store.contact_details = contact_details;
  if (roles) store.roles = roles;
  if (gmt) store.gmt = gmt;
  if (currency) store.currency = currency;
  if (created_at) store.created_at = created_at;
  try {
    await store.save(); 
    return { message: "success", result: store };
  } catch (e) {
    return { error: e.message };
  }
};
