const createProductCategory = require("./createProductCategory");
const checkNameExist = require("./checkNameExist");
const updateProduct = require("./updateProductCategory");
const validation = require("../../../validation/joi.productCategory");
module.exports = async (req, res) => {
  let { name, id } = req.body;
  let { error } = validation.validate({ name });
  if (error) return res.json({ error: error.details });
  if (id) {
    let { e, message, ...data } = await updateProduct({ id });
    if (e) return res.json({ error: e.message });
    return res.json({ message, data });
  } else {
    if ((await checkNameExist(name)) !== 0)
      return { error: "Product Category with same name already exists" };
    let created_at = Date.now();
    let created_by = req.user._id;
    let { e, message, ...data } = await createProductCategory({
      name,
      created_at,
      created_by
    });
    if (e) return res.json({ error: e.message });
    return res.json({ message, ...data });
  }
};
