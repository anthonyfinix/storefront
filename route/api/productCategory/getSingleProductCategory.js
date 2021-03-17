const ProductCategory = require("./modal");
module.exports = async ({ name, id }) => {
  let params = {};
  if (name) params.name = name;
  if (id) params._id = id;
  try {
    let productCategory = await ProductCategory.findOne(params);
    return { message: "success", result: productCategory };
  } catch (e) {
    return { error: e.message };
  }
};
  