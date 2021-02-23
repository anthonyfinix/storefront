const ProductCategory = require("./modal");
module.exports = async ({ name, created_at }) => {
  if (error) return { error: error.details };
  if ((await ProductCategory.countDocuments({ name })) !== 0)
    return { error: "Product with same name already exists" };
  try {
    let newProductCategory = await ProductCategory({ name, created_at }).save();
    return { message: "message", productCategory: newProductCategory };
  } catch (e) {
    return { error: e };
  }
};
