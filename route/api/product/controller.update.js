const Product = require("./modal");
const validation = require("../../../validation/joi.product");
const checkNameExist = require("../product/checkNameExist");
const checkSKUExist = require("../product/checkSKUExist");
const updateProduct = require("./updateProduct");
module.exports = async (req, res) => {
  let { id } = req.params;
  let { name, sku, category, dimension } = req.body;
  let params = { id };
  if (name && name != "") params.name = name;
  if (sku && sku != "") params.sku = sku;
  if (category) {
    let { name: categoryName, id: categoryId } = category;
    if (categoryId) params["category.id"] = categoryId;
    if (categoryName) params["category.name"] = categoryName;
  }
  if (dimension) {
    let { length, breath, height } = dimension;
    if (length) params.dimension.length = length;
    if (breath) params.dimension.breath = breath;
    if (height) params.dimension.height = height;
  }
  if (await checkNameExist(name))
    return res.json({ error: "Name already exist" });
  if (await checkSKUExist(name))
    return res.json({ error: "SKU already exist" });
  let { error, message, result } = await updateProduct(params);
  if (error) return res.json({ error });
  if (result) return res.json({ message, result });
};
