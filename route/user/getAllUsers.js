const { User } = require("../../modal");

module.exports = async (req, res) => {
  let users = await User.find({});
  if (!!users.length) res.json({ error: "No User found" });
  res.json({ users: users });
};
