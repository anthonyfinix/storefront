const Product = require("./modal");
const validation = require("../../../validation/joi.product");
const checkNameExist = require("../product/checkNameExist");
const checkSKUExist = require("../product/checkSKUExist");
const updateProduct = require("./updateProduct");
const createProduct = require("./createProduct");
module.exports = async (req, res) => {
  let { user } = req;
  let {
    id,
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
    suppliers
  } = req.body;
  if (id) {
    let { error: updationError, result } = await updateProduct({
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
      suppliers
    });
    if (updationError) return res.json({ error: updationError });
    return res.json({ message: "success", result });
  }
  console.log('test');
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
    suppliers
  });
  if (error) return res.json({ error:error.details });
  let productNameExist = await checkNameExist(name);
  if (productNameExist) return res.json({ error: "Name already exists" });
  let productSKUExist = await checkSKUExist(sku);
  if (productSKUExist) return res.json({ error: "SKU already exists" });
  let created_by = user._id;
  let { error: creationError, result } = await createProduct({
    name,
    sku,
    manufacturer,
    brand,
    sale_price,
    current_price,
    buying_price,
    dimension,
    category,
    created_at: Date.now(),
    created_by
  });
  if (error) return res.json({ error: creationError });
  return res.json({ message: "success", result });
};
