const ProductCategory = require("./modal");
module.exports = async ({ name, id }) => {
  let params = {};
  if (name) params.name = name;
  if (id) params.id = id;
  try {
    let productCategory = await ProductCategory.find(params);
    if (productCategory) return { message: "success", results: productCategory };
  } catch (e) {
    return { error: e.message };
  }
};
