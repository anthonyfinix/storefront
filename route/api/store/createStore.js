const Store = require("./modal");
module.exports = async ({
  name,
  contact_details,
  roles,
  gmt,
  currency,
  active,
  created_at,
  created_by
}) => {
  try {
    let response = await Store({
      name,
      contact_details,
      roles,
      gmt,
      currency,
      active,
      created_at,
      created_by
    }).save();
    return { message: "success", result: response };
  } catch (e) {
    return e;
  }
};
