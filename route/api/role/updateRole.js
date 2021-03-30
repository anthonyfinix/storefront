const Role = require("./modal");
const {
  joi_role_id,
  joi_role_name,
  joi_role_product,
  joi_role_customer,
  joi_role_role,
  joi_role_supplier,
  joi_role_store,
  joi_role_productCategory,
  joi_role_user
} = require("../../../validation/joi.role");
module.exports = async ({
  id,
  name,
  product,
  store,
  user,
  customer,
  productCategory,
  supplier,
  role
}) => {
  if (id) {
    let joi_role_id_validation = joi_role_id.validate(id);
    if (joi_role_id_validation.error)
      return { error: joi_role_id_validation.error.details };
  }

  let dbRole = await Role.findOne({ _id: id });

  if (name) {
    let joi_role_id_validation = joi_role_name.validate(name);
    if (joi_role_id_validation.error)
      return { error: joi_role_id_validation.error.details };
    dbRole.name = name;
  }

  if (product) {
    let joi_role_product_validation = joi_role_product.validate(product);
    if (joi_role_product_validation.error)
      return { error: joi_role_product_validation.error.details };
    for (permission in dbRole.product) {
      if (product.hasOwnProperty(permission)) {
        dbRole.product[permission] = product[permission];
      }
    }
  }

  if (supplier) {
    let joi_role_supplier_validation = joi_role_supplier.validate(supplier);
    if (joi_role_supplier_validation.error)
      return { error: joi_role_supplier_validation.error.details };
    for (permission in dbRole.supplier) {
      if (supplier.hasOwnProperty(permission)) {
        dbRole.supplier[permission] = supplier[permission];
      }
    }
  }

  if (store) {
    let joi_role_store_validation = joi_role_store.validate(store);
    if (joi_role_store_validation.error)
      return { error: joi_role_store_validation.error.details };
    for (permission in dbRole.store) {
      if (store.hasOwnProperty(permission)) {
        dbRole.store[permission] = store[permission];
      }
    }
  }

  if (user) {
    let joi_role_user_validation = joi_role_user.validate(user);
    if (joi_role_user_validation.error)
      return { error: joi_role_user_validation.error.details };
    for (permission in dbRole.user) {
      if (user.hasOwnProperty(permission)) {
        dbRole.user[permission] = user[permission];
      }
    }
  }

  if (productCategory) {
    let joi_role_productCategory_validation = joi_role_productCategory.validate(
      productCategory
    );
    if (joi_role_productCategory_validation.error)
      return { error: joi_role_productCategory_validation.error.details };
    for (permission in dbRole.productCategory) {
      if (productCategory.hasOwnProperty(permission)) {
        dbRole.productCategory[permission] = productCategory[permission];
      }
    }
  }

  if (customer) {
    let joi_role_customer_validation = joi_role_customer.validate(customer);
    if (joi_role_customer_validation.error)
      return { error: joi_role_customer_validation.error.details };
    for (permission in dbRole.customer) {
      if (customer.hasOwnProperty(permission)) {
        dbRole.customer[permission] = customer[permission];
      }
    }
  }

  if (role) {
    let joi_role_validation = joi_role_.validate(role);
    if (joi_role_validation.error)
      return { error: joi_role_validation.error.details };
    dbRole.role = role;
    for (permission in dbRole.role) {
      if (role.hasOwnProperty(permission)) {
        dbRole.role[permission] = role[permission];
      }
    }
  }

  try {
    let updatedRole = await dbRole.save();
    return { message: "success", result: updatedRole };
  } catch (e) {
    return { error: e.message };
  }
};
