const Supplier = require("./modal");
module.exports = async ({ company_name, id }) => {
  let params = {};
  if (company_name) params.company_name = company_name;
  if (id) params._id = id;
  try {
    let suppliers = await Supplier.find(params);
    let count = suppliers.length;
    let message = count < 0 ? "no product found" : "success";
    return { result: suppliers, count, message };
  } catch (e) {
    return { error: e.message };
  }
};
