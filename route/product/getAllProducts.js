const Product = require("../../modal/product");
const validation = require("../../validation/joi.product");

module.exports = async (req, res) => {
  let products = await Product.find({});
  console.log(!!products.length);
  if (!products.length) return res.json({ error: "No Products Found" });
  res.json({ message: "success", products: products });
};
