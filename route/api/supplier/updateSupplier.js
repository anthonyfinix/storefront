const Supplier = require("./modal");
const {
  joi_supplier_company_name,
  joi_supplier_name,
  joi_supplier_contact_details,
} = require("../../../validation/joi.supplier");
module.exports = async ({
  id,
  name,
  company_name,
  active,
  total_purchase,
  contact_details,
}) => {
  let message = "updated ";
  try {
    let supplier = await Supplier.findOne({ _id: id });
    if (!supplier) return { error: "No Supplier Found" };

    if (name) {
      let joi_supplier_name_validation = joi_supplier_name.validate(name);
      if (joi_supplier_name_validation.error)
        return { error: joi_supplier_name_validation.error.details };
      message + "name ";
      supplier.name = name;
    }
    if (company_name) {
      let joi_supplier_company_name_validation = joi_supplier_company_name.validate(
        company_name
      );
      if (joi_supplier_company_name_validation.error)
        return { error: joi_supplier_company_name_validation.error.details };
      message + "company name ";
      supplier.company_name = company_name;
    }
    if (contact_details) {
      let joi_supplier_contact_details_validation = joi_supplier_contact_details.validate(
        contact_details
      );
      if (joi_supplier_contact_details_validation.error)
        return { error: joi_supplier_contact_details_validation.error.details };
      message + "company name ";
      supplier.contact_details = contact_details;
    }

    try {
      let updatedSupplier = await supplier.save();
      return { result: updatedSupplier, message };
    } catch (e) {
      return { error: e.message };
    }
  } catch (e) {
    return { error: e.message };
  }
};
