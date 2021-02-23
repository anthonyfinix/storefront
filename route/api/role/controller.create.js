const createRole = require("./createRole");
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

  let created_by = req.user.user_id;
  let created_at = Date.now();
  let { error } = validation.validate({
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
  if (error) return res.json({ error: error.details });
  let { e, message, ...data } = createRole({
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
  if (message == "success") return res.json({ message, data });
  return res.json({});
};
