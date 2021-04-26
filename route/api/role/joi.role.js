const joi = require("joi");
const name = joi.string().required();
const permission = joi.boolean();
const permissions = joi.object({
    read: joi.boolean(),
    write: joi.boolean(),
    update: joi.boolean(),
    delete: joi.boolean()
})
const user = permissions;
const role = permissions;
const store = permissions;
const customer = permissions;
const supplier = permissions;
const product = permissions;
const productCategory = permissions;

exports.joi_role_user = user;
exports.joi_role_name = name;
exports.joi_role_role = role;
exports.joi_role_store = store;
exports.joi_role_product = product;
exports.joi_role_supplier = supplier;
exports.joi_role_customer = customer;
exports.joi_role_permission = permission;
exports.joi_role_permissions = permissions;
exports.joi_role_productCategory = productCategory;

module.exports = joi.object({
    name: name.required(),
    product,
    store,
    user,
    customer,
    product,
    productCategory,
    supplier,
    role
});