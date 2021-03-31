const Supplier = require("./modal");
const {
  joi_supplier_id,
  joi_supplier_company_name
} = require("../../../validation/joi.supplier");
const joi_query = require("../../../validation/joi.query");
module.exports = async ({ company_name, id, query, name, skip, limit }) => {
  let params = {};
  if (query) {
    let joi_query_validation = joi_query.validate(query);
    if (joi_query_validation.error)
      return { error: joi_query_validation.error.details };
    params.company_name = { $regex: new RegExp(`\\w*${query}\\w*`, "g") };
  }
  if (company_name) {
    const joi_supplier_company_name_validation = joi_supplier_company_name.validate(
      company_name
    );
    if (joi_supplier_company_name_validation.error)
      return joi_supplier_company_name_validation.error.details;
    params.company_name = company_name;
  }
  if (id) {
    const joi_supplier_id_validation = joi_supplier_id.validate(id);
    if (joi_supplier_id_validation.error)
      return joi_supplier_id_validation.error.details;
    params._id = id;
  }
  try {
    let suppliers = await Supplier.find(params)
      .skip(skip)
      .limit(limit);
    let count = suppliers.length;
    let message = count < 0 ? "no product found" : "success";
    return { result: suppliers, count, message };
  } catch (e) {
    return { error: e.message };
  }
};
