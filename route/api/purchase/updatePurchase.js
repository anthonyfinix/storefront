const { joi_customer_name } = require('../../../validation/joi.customer');
const { purchase_store } = require('../../../validation/joi.purchase');
const { joi_purchase_store, joi_purchase_customer, joi_purchase_amount, joi_purchase_products, joi_purchase_active } = require('../../../validation/joi.purchase');
const { product } = require('../product/joi.product');
module.exports = async ({ id, store, customer, amount, products, active }) => {
    let purchase = await purchase.findOne({ _id: id });
    if (!purchase) return { error: "No purchase Found" }
    if (store) {
        let storeValidation = joi_purchase_store.validate(store);
        if (storeValidation.error) return { error: storeValidation.error.details }
        let store = await Store.findOne({ _id: store });
        purchase.store = store;

    }
    if (customer) {
        let customerValidation = joi_purchase_customer.validate(customer);
        if (customerValidation.error) return { error: storeValidation.error.details }
        let customer = await customer.findOne({ _id: customer });
        purchase.customer = customer;
    }
    if (amount) {
        let amountValidation = joi_purchase_amount.validate(amount);
        if (amountValidation.error) return { error: amountValidation.error.details }
        purchase.amount = amount;
    }
    if (products) {
        let productsValidation = joi_purchase_products.validate(products);
        if (productsValidation.error) return { error: productsValidation.error.details }
        let productId = [];
        for (i = 0; i < products.length; i++) {
            productId.push(products[i].product)
        }
        let dbProduct = await product.find({ _id: { $in: productId } });
        for (i = 0; i < products.length; i++) {
            if (!dbProduct[i]) return { error: "id not found" }
        }
        purchase.products = products;
    }
    if (active) {
        let activeValidation = joi_purchase_active.validate(active);
        if (activeValidation.error) return { error: activeValidation.error.details }
        purchase.active = active;
    }
}






