const Customer = require("./modal");
module.exports = async ({
  name,
  contact_details,
  store_visited,
  total_purchase,
  active,
  last_visit,
  created_at,
  created_by,
}) => {
  let customer = new Customer({
    name,
    contact_details,
    last_visit,
    store_visited,
    total_purchase,
    active,
    created_at,
    created_by,
  });
  try {
    await customer.save();
    return { message: "success", result: customer };
  } catch (e) {
    return { error: e };
  }
};
