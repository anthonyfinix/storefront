const createProductCategory = require("./createProductCategory");
const validation = require("../../../validation/joi.productCategory");
module.exports = async (req, res) => {
  let { name } = req.body;
  let { error } = validation.validate({ name, created_at });
  if (error) return res.json({ error: error.details });

  let { e, message, ...data } = createProductCategory({
    name,
    created_at: Date.now()
  });
  if (e) return res.json({ error: e.message });
  return res.json({ message, data });
};
