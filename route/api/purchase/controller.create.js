const { joi_purchase } = require("../../../validation/joi.purchase");
const { joi_customer, joi_customer_id } = require("../../../validation/joi.customer");
const createPurchase = require("./createPurchase");
const updatePurchase = require('./updatePurchase');
const Customer = require('../customer/modal')
const createCustomer = require("../customer/createCustomer");
const config = require("../../../config");
const updateProduct = require('./updatePurchase');
module.exports = async (req, res) => {
  let { store, customer, amount, products, active, id } = req.body;
  if (id) {
    if (purchaseError) return res.json({ error: purchaseError.details });
    let { result, error, count, message } = await updatePurchase(
      store,
      customer,
      amount,
      products,
      active,
      id
    );
    if (error) return res.json({ error: error });
    return res.json({message, result, count,  });
  }
  if (!customer.id) {
    customer.total_purchase = { amount: amount.price };
    customer.store_visited = [store];
    let { error: customerError } = joi_customer.validate(customer);
    if (customerError) return res.json({ error: customerError.details });
    let { error: createCustomerError, result } = await createCustomer({
      ...customer,
      active: true,
    });
    if (createCustomerError) return res.json({ error: createCustomerError });
    customer = String(result._id);
  } else {
    if((!await Customer.findOne({ _id: customer.id }))) return res.json({error: "Customer ID not valid"});
    customer = customer.id
  }
  let { error: purchaseError } = joi_purchase.validate({
    store,
    customer,
    amount,
    products,
  });
  if (purchaseError) return res.json({ error: purchaseError.details });
  let created_at = Date.now();
  let created_by = req.user._id;
  if (!active) active = config.default_purchase_state;
  let { e, message, ...data } = await createPurchase({
    store,
    customer,
    amount,
    products,
    active,
    created_at,
    created_by,
  });
  if (e) res.json({ error: e.message });
  return res.json({ message, ...data });
};
