const encryptPassword = require("../../../util/encryptPassword");
const validation = require("../../../validation/joi.user");
const usernameExists = require("./checkUsernameExist");
const nameExists = require("./checkNameExist");
const createUser = require("./createUser");
const config = require("../../../config");
module.exports = async (req, res) => {
  let {
    name,
    username,
    password,
    contact_details,
    active = config.default_user_state,
    employeeId
  } = req.body;

  let = { error } = validation.validate({
    name,
    username,
    password,
    contact_details,
    active,
    employeeId
  });
  if (error) return res.json({ error: error.details });
  if ((await nameExists(name)).exist)
    return res.json({ error: "name already exist" });
  if ((await usernameExists(username)).exist)
    return res.json({ error: "username already exist" });
  let encryptedPassword = await encryptPassword(password, config.salt_round);
  let created_at = Date.now();
  let role = config.default_user_role;
  let { e, message, ...data } = await createUser({
    name,
    username,
    contact_details,
    active,
    role,
    created_at,
    encryptedPassword,
    active
  });
  if (e) return res.json({ error: e.message });
  return res.json({ message, ...data });
};
