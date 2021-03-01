const validation = require("../../../validation/joi.purchase");
const createPurchase = require("./createPurchase");
const config = require("../../../config");
module.exports = async (req, res) => {
  let { store, customer, amount, product, active } = req.body;
  let { error } = validation.validate({
    store,
    customer,
    amount,
    product,
    active
  });
  if (error) return res.json({ error: error.details });
  let created_at = Date.now();
  let created_by = req.user._id;
  if (!active) active = config.default_purchase_state;
  let { e, message, ...data } = await createPurchase({
    store,
    customer,
    amount,
    product,
    active,
    created_at,
    created_by
  });
  if (e) res.json({ error: e.message });
  return res.json({ message, ...data });
};
