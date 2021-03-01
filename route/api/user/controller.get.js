const User = require("./modal");

module.exports = async (req, res) => {
  let users = await User.find({});
  if (!users.length) return res.json({ error: "No User found" });
  return res.json({ message: true, users: users });
};
