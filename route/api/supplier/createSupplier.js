const Supplier = require("./modal");
module.exports = async ({
  company_name,
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
    let response = await Supplier({
      company_name,
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
