const createProductCategory = require("./createProductCategory");
const ProductCategory = require("./modal");
const validation = require("../../../validation/joi.productCategory");
module.exports = async (req, res) => {
  let { name } = req.body;
  let created_at = Date.now();
  let { error } = validation.validate({ name, created_at });
  if (error) return res.json({ error: error.details });
  if ((await ProductCategory.countDocuments({ name })) !== 0) return { error: "Product with same name already exists" };
  let { e, message, ...data } = await createProductCategory({name,created_at: Date.now()});
  if (e) return res.json({ error: e.message });
  return res.json({ message, data });
};
 