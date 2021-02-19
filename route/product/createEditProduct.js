const Product = require("../../modal/product");
const validation = require("../../validation/joi.product");

module.exports = async (req, res) => {
  if (!req.user && !req.user.role === "admin") return res.json({ error });
  let {
    name,
    sku,
    media,
    category,
    dimension,
    manufacturer,
    brand,
    sale_price,
    current_price,
    buying_price,
    stores,
    supplier
  } = req.body;
  let { error } = validation.validate({
    name,
    sku,
    media,
    category,
    dimension,
    manufacturer,
    brand,
    sale_price,
    current_price,
    buying_price,
    stores,
    supplier
  });
  // check if name is taken
  let productNameExist = await Product.findOne({ name });
  if (productNameExist) return res.json({ error: "Name Already exists" });
  let productSKUExist = await Product.findOne({ sku });
  if (productSKUExist) return res.json({ error: "SKU Already exists" });
  if (error) return res.json({ error });
  let product = new Product({
    name,
    sku,
    media,
    category,
    dimension,
    manufacturer,
    brand,
    sale_price,
    current_price,
    buying_price,
    stores,
    supplier
  });
  try {
    let response = await product.save();
    return res.json({ message: "Success", product: response });
  } catch (e) {
    return res.json({ error: e });
  }
};
