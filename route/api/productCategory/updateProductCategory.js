const ProductCategory = require("./modal");
module.exports = async ({ id, name }) => {
  let productCategory = await ProductCategory.findOne({ _id: id });
  if (productCategory) return { error: "No product category found" };
  if (name) productCategory.name = name;
  try {
    let updatedProductCategory = await ProductCategory.save();
    return { message: "success", productCategory: updatedProductCategory };
  } catch (e) {
    return { error: e };
  }
};
