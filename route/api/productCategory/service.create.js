const ProductCategory = require("./modal");
const validation = require("../../../validation/productCategory");
module.exports = async ({ name }) => {
  let { error } = validation.validate({ name });
  if (error) return { error: error.details };
  if ((await ProductCategory.countDocuments({ name })) !== 0)
    return { error: "Product with same name already exists" };
  try {
    return await ProductCategory({ name }).save();
  } catch (e) {
    return { error: e };
  }
};
