const ProductCategory = require("./modal");
module.exports = async (req, res) => {
  let productCategories = await ProductCategory.find({});
  return res.json({ message: "success", results: productCategories });
};
