const User = require("../modal/user");
const decryptPassword = require("../util/decryptPassword");
module.exports = async (req, res) => {
  let { username, password } = req.body;
  let user = await User.findOne({ username });
  if (!user) return res.json({ error: "no user found" });
  let match = await decryptPassword(password, user.password);
  if (!match) return res.json({ error: "credential error" });
  console.log(req.session.user );
  res.send({ message: "success", user });
};
