const Customer = require('./modal');
const Store = require('../store/modal');
const { joi_customer_name, joi_customer_contact_details, joi_customer_store_visited, joi_customer_total_purchase, joi_customer_active } = require('../../../validation/joi.customer');

module.exports = async ({ id, name, contact_details, store_visited, total_purchase, active }) => {
    let customer = await Customer.findOne({ _id: id });
    if (!customer) return { error: "No Customer Found" }
    if (name) {
        let nameValidation = joi_customer_name.validate(name);
        if (nameValidation.error) return { error: nameValidation.error.details }
        customer.name = name;
    }
    if (contact_details) {
        let contactDetailsValidation = joi_customer_contact_details.validate(contact_details);
        if (contactDetailsValidation.error) return { error: contactDetailsValidation.error.details }
        customer.contact_details = contact_details;
    }
    if (store_visited) {
        let storeVisitedValidation = joi_customer_store_visited.validate(store_visited);
        if (storeVisitedValidation.error) return { error: storeVisitedValidation.error.details }
        let dbStores = await Store.find({ _id: { $in: store_visited } });
        for (i = 0; i < store_visited.length; i++) {
            if (!dbStores[i]) return { error: "id not found" }
        }
        customer.store_visited = store_visited
    }
    if (total_purchase) {
        let totalPurchaseValidation = joi_customer_total_purchase.validate(total_purchase);
        if (totalPurchaseValidation.error) return { error: totalPurchaseValidation.error.details }
        customer.total_purchase = total_purchase;

    }
    if (active) {
        let activeValidation = joi_customer_active.validate(active);
        if (activeValidation.error) return { error: activeValidation.error.details }
        customer.active = active;
    }
    try {
        let response = await customer.save();
        return { result: response, message: "success" }
    } catch (e) {
        return { error: e.message }
    }



}