const Store = require("./modal");

module.exports = async (stores = []) => {
  console.log(stores)
  stores.forEach(store => {
    if (store._id) {
      if (store.name) ids.push(`ObjectId("${id})"`);
    }
  });

  // if (name) params.name = name;
  // if (contact_details) params.contact_details = contact_details;
  // if (roles) params.roles = roles;
  // if (gmt) params.gmt = gmt;
  // if (currency) params.currency = currency;
  // if (created_at) params.created_at = created_at;
  try {
    let stores = await Store.find({ _id: { $in: ids } });
    if (stores && !(stores.length > 0)) {
      return { message: "No result found", result: stores };
    }
    return { message: "success", result: stores };
  } catch (e) {
    return { error: e.message };
  }
};
