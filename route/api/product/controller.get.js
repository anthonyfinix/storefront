const Product = require("./modal");

module.exports = async (req, res) => {
  let products = await Product.find({});
  if (!products.length) return res.json({ error: "no product found" });
  return res.json({ message: "success", result: products });
};
