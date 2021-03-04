const Product = require("./modal");
const getProduct = require("./getProduct");

module.exports = async (req, res) => {
  let { name } = req.query;
  let { products, error } = await getProduct({name});
  if (error) return res.json({ error });
  if (!products.length) return res.json({ error: "no product found" });
  return res.json({ message: "success", result: products });
};
