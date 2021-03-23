const ProductCategory = require("./modal");
module.exports = async ({ name, id }) => {
  let params = {};
  if (name) params.name = name;
  if (id) params.id = id;
  try {
    let productCategory = await ProductCategory.find(params);
    let count = productCategory.length;
    if (productCategory)
      return { message: "success", result: productCategory, count };
  } catch (e) {
    return { error: e.message };
  }
};
