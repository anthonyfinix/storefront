const ProductCategory = require("./modal");
const {
  joi_productCategory_id,
  joi_productCategory_name,
} = require("../../../validation/joi.productCategory");
const joi_query = require("../../../validation/joi.query");

module.exports = async ({ name, id, query, limit, skip }) => {
  let params = {};
  if (query) {
    let joi_query_validation = joi_query.validate(query);
    if (joi_query_validation.error) {
      return { error: joi_query_validation.error.details };
    }
    params.name = { $regex: new RegExp(`\\w*${query}\\w*`, "g") };
  }
  if (name) {
    let joi_productCategory_name_validation = joi_productCategory_name.validate(name);
    if (joi_productCategory_name_validation.error) {
      return { error: joi_productCategory_name_validation.error.details };
    }
    params.name = name;
  }
  if (id) {
    let joi_productCategory_id_validation = joi_productCategory_id.validate(id);
    if (joi_productCategory_id_validation.error) {
      return { error: joi_productCategory_id_validation.error.details };
    }
    params._id = id;
  }
  try {
    let productCategory = await ProductCategory.find(params)
      .limit(limit)
      .skip(skip);
    let count = productCategory.length;
    if (productCategory)
      return { message: "success", result: productCategory, count };
  } catch (e) {
    return { error: e.message };
  }
};
