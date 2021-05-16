const Purchase = require("./modal");
const Store = require("../store/modal");
const Product = require("../product/modal");
const Customer = require("../customer/modal");
const {
  joi_purchase_amount,
  joi_purchase_active,
  joi_purchase_product,
} = require("../../../validation/joi.purchase");

module.exports = async ({
  id,
  store,
  customer,
  amount,
  product,
  active,
  created_at,
  created_by,
}) => {
  let purchase = await Purchase.findOne({ _id: id });
  if (purchase) {
    // check store
    if (store) {
      if (await Store.countDocuments({ _id: store._id })) params.store = store;
    }
    // check customer
    if (customer) {
      if (await Customer.countDocuments({ _id: customer._id }))
        params.customer = customer;
    }
    // check amount
    if (amount) {
      let amountValidation = joi_purchase_amount.validate(amount);
      if (amountValidation.error) {
        return { error: amountValidation.error.details };
      } else {
        params.amount = amount;
      }
    }
    // check active
    if (active) {
      let activeValidation = joi_purchase_active.validate(amount);
      if (activeValidation.error) {
        return { error: activeValidation.error.details };
      }
    }
    // check product
    if (product) {
      let productValidation = joi_purchase_product.validate(product);
      if (productValidation.error) {
        return { error: productValidation.error.details };
      }
      let productsId = product.map((item) => item.product._id);
      let dbProducts = await Product.find({ _id: { $in: productsId } });
      for(i=0;i<dbProducts.length;i++){
        if(productsId[i] != dbProducts[i]._id) return {error:`${productsId} not found`}
      }
    }
    try {
      let response = await Purchase(params).save();
      return { message: "success", result: response };
    } catch (e) {
      return { error: e };
    }
  } else {
    return { error: "no purchase found with the id" };
  }
};
