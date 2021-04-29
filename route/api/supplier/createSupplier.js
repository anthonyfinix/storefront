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
  created_by,
}) => {
  try {
    let { error } = joi_supplier.validate({
      company_name,
      name,
      contact_details,
      active,
      total_purchase,
    });
    if (error) return { error: error };
    let response = await Supplier({
      company_name,
      name,
      contact_details,
      roles,
      gmt,
      currency,
      active,
      created_at,
      created_by,
    }).save();
    return { message: "success", result: response };
  } catch (e) {
    return { error: e };
  }
};
