const User = require("./modal");
const decryptPassword = require("../../../util/decryptPassword");
module.exports = async (req, res) => {
  if (req.session.user_id) return res.json({ error: "already Logged in" });
  let { username, password } = req.body;
  // get user from db
  let user = await User.findOne({ username });
  // check user exists
  if (!user) return res.json({ error: "no user found" });
  // check password
  let match = await decryptPassword(password, user.password);
  // return if password doesnt match
  if (!match) return res.json({ error: "credential error" });
  // set user variable
  req.session.user_id = user._id;
  // sent user data
  res.send({ message: "success", user });
};
