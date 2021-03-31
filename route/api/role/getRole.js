const Role = require("./modal");
const { joi_role_id, joi_role_name } = require("../../../validation/joi.role");
const joi_query = require("../../../validation/joi.query");
module.exports = async ({ name, id, query, limit, skip, page }) => {
  let params = {};
  if (query) {
    let joi_query_validation = joi_query.validate(query);
    if (joi_query_validation.error)
      return { error: joi_query_validation.error.details };
    params.name = { $regex: new RegExp(`\\w*${query}\\w*`, "g") };
  }
  if (name) {
    let joi_role_name_validation = joi_role_name.validate(name);
    if (joi_role_name_validation.error)
      return { error: joi_role_name_validation.error.details };
    params.name = name;
  }
  if (id) {
    let joi_role_id_validation = joi_role_id.validate(id);
    if (joi_role_id_validation.error)
      return { error: joi_role_id_validation.error.details };
    params._id = id;
  }
  try {
    let role = await Role.find(params)
      .limit(limit)
      .skip(skip);
    let count = role.length;
    if (role) return { message: "success", result: role, count };
  } catch (e) {
    return { error: e.message };
  }
};
