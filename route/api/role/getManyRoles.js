const Role = require("./modal");
module.exports = async (ids) => {
  if (typeof ids === "array" && ids.length <= 0)
    return { error: "roles empty" };
  try {
    let roles = await Role.find({ _id: { $in: ids } });
    let count = roles.length;
    let message = count > 0 ? "success" : "no ids found";
    return { message, result: roles, count };
  } catch (e) {
    return { error: e };
  }
};
