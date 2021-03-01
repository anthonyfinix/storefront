const ProductCategory = require("./modal");
module.exports = async ({ name, created_at }) => {
  try {
    let newProductCategory = await ProductCategory({ name, created_at }).save();
    return { message: "message", productCategory: newProductCategory };
  } catch (e) {
    return { error: e };
  }
};
