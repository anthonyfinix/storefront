const ProductCategory = require("./modal");
module.exports = async ({ name, created_at }) => {
  if (error) return { error: error.details };
  try {
    let newProductCategory = await ProductCategory({ name, created_at }).save();
    return { message: "message", productCategory: newProductCategory };
  } catch (e) {
    return { error: e };
  }
};
