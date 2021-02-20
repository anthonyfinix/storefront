const Product = require("../../modal/product");

module.exports = async (req, res) => {
  let products = await Product.find({});
  res.json({ message: "success", products: products });
};
