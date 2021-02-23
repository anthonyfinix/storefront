// const validation = require("../../../validation/joi.user");
const User = require("./modal");
const config = require("../../../config");
const encryptPassword = require("../../../util/encryptPassword");
const usernameExist = require("./service.username.exist");
module.exports = async (req, res) => {
  let {
    name,
    username,
    password,
    contact_details,
    active,
    employeeId,
    role
  } = req.body;

  // check error
  // let { error } = validation.validate({
  //   name,
  //   username,
  //   password,
  //   contact_details,
  //   active,
  //   employeeId,
  //   role
  // });
  // if (error) return res.json({ error: error.details });

  // check if username available
  if (await usernameExist(username))
    return res.json({ error: "username already exist" });
  // bcypt password
  let encrypted_password = await encryptPassword(password, config.salt_round);

  // create new user
  let user = new User({
    name,
    username,
    password: encrypted_password,
    contact_details
  });
  if (active) user.active = active;
  if (employeeId) user.employeeId = employeeId;
  role ? (user.role = role) : (user.role = config.default_user_role);
  try {
    let newUser = await user.save();
    return res.json({ message: "success", user: newUser });
  } catch (e) {
    return res.json({ error: e.message });
  }
};
