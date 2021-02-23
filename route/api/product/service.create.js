const Product = require("./modal");
const validation = require("../../../validation/joi.product");

module.exports = async (req, res) => {
  let { user } = req;
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
  let productNameExist = await Product.findOne({ name });
  if (productNameExist) return res.json({ error: "Name already exists" });
  let productSKUExist = await Product.findOne({ sku });
  if (productSKUExist) return res.json({ error: "SKU already exists" });
  let product = new Product({
    name,
    sku,
    manufacturer,
    brand,
    sale_price,
    current_price,
    buying_price,
    dimension,
    category
  });
  product.created_by = user._id;
  try {
    let response = await product.save();
    return res.json({ message: "Success", product: response });
  } catch (e) {
    let { errors } = e;
    return res.json({ errors });
  }
};
