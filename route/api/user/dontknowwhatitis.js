// const validation = require("../validation/joi.user");
const User = require("../modal/user");
const config = require("../config");
const encryptPassword = require("../util/encryptPassword");
const usernameExist = require("../util/usernameExist");
module.exports = async (req, res) => {
  let { name, username, password, contact_details, active } = req.body;
  // let { error } = validation.validate({
  //   name,
  //   username,
  //   password,
  //   contact_details,
  //   active
  // });
  // check error
  if (error) return res.json({ error: error.details });
  // check if username available
  if (await usernameExist(username))
    res.json({ error: "username already exist" });
  // bcypt password
  let encrypted_password = await encryptPassword(password, config.salt_round);
  // create new user details object
  // let new_user_details = {};
  // if (active) new_user_details.active = active;
  // new_user_details.username = username;
  // new_user_details.password = encrypted_password;
  // new_user_details.contact_details = contact_details;
  let user = new User({ name, username, password, contact_details });
  // save user and return new user or error
  try {
    let newUser = await user.save();
    res.json({ message: "success", user: newUser });
  } catch (e) {
    res.json({ error: e.message });
  }
};
