const { joi_purchase } = require("../../../validation/joi.purchase");
const { joi_customer } = require("../../../validation/joi.customer");
const createPurchase = require("./createPurchase");
const createCustomer = require("../customer/createCustomer");
const config = require("../../../config");
const updateProduct = require('./updatePurchase');
module.exports = async (req, res) => {
  let { store, customer, amount, product, active, id } = req.body;
  if (id) {
    if (purchaseError) return res.json({ error: purchaseError.details });
    let { result, error, count, message } = await updatePurchase(
      store,
      customer,
      amount,
      product,
      active,
      id
    );
    if (error) return res.json({ error: error });
    return res.json({ result, count, message });
  }
  if (customer) {
    customer.total_purchase = { amount: amount.total };
    customer.store_visited = [store];
  }
  let newCustomer = { ...customer };
  delete newCustomer.id;
  let { error: customerError } = joi_customer.validate(newCustomer);
  if (customerError) return res.json({ error: customerError.details });
  if (!customer.id) {
    let { error: createCustomerError, result } = await createCustomer({
      ...customer,
      active: true,
    });
    if (createCustomerError) return res.json({ error: createCustomerError });
    customer = String(result._id);
  } else {
    customer = customer.id;
  }
  let { error: purchaseError } = joi_purchase.validate({
    store,
    customer,
    amount,
    product,
  });
  if (purchaseError) return res.json({ error: purchaseError.details });
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
    created_by,
  });
  if (e) res.json({ error: e.message });
  return res.json({ message, ...data });
};
