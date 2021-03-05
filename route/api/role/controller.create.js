const createRole = require("./createRole");
const validation = require('../../../validation/joi.role');
module.exports = async (req, res) => {
  let {
    name,
    product,
    store,
    user,
    customer,
    productCategory,
    supplier,
    role
  } = req.body;

  let { error } = validation.validate({
    name,
    product,
    store,
    user,
    customer,
    productCategory,
    supplier,
    role,
  });
  if (error) return res.json({ error: error.details });
  let created_by = req.user._id;
  let created_at = Date.now();
  let { e, message, ...data } = await createRole({
    name,
    product,
    store,
    user,
    customer,
    productCategory,
    supplier,
    role,
    created_at,
    created_by
  });
  if (error) return res.json({ error: e.message });
  if (message == "success") return res.json({ message, ...data });
};
