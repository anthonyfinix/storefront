const ProductCategory = require("./modal");
module.exports = async ({ id, name }) => {
  let productCategory = await ProductCategory.findOne({ _id: id });
  if (productCategory.length < 0) return { error: "No Product" };
  if (name) productCategory.name = name;
  try {
    let updatedProductCategory = await ProductCategory.save();
    return { message: "message", productCategory: updatedProductCategory };
  } catch (e) {
    return { error: e };
  }
};
