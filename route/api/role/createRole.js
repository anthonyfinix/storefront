const Role = require("./modal");
const validation = require("../../../validation/joi.role");

module.exports = async ({
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
}) => {
  try {
    let newRole = await new Role({
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
    return {
      message: "success",
      result: newRole
    };
  } catch (e) {
    return e;
  }
};
