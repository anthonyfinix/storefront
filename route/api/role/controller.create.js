const createRole = require("./createRole");
const updateRole = require("./updateRole");
const { joi_role } = require("../../../validation/joi.role");
const getRole = require("./getRole");
module.exports = async (req, res) => {
  let {
    id,
    name,
    product,
    store,
    user,
    customer,
    productCategory,
    supplier,
    role
  } = req.body;
  if (id) {
    let { error, result, message } = await updateRole({
      id,
      name,
      product,
      store,
      user,
      customer,
      productCategory,
      supplier,
      role
    });
    if (error) return res.json({ error: error });
    return res.json({ message, result });
  }
  let { error } = joi_role.validate({
    name,
    product,
    store,
    user,
    customer,
    productCategory,
    supplier,
    role
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
