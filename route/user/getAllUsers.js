const { User } = require("../../modal");

module.exports = async (req, res) => {
  let users = await User.find({});
  res.json({ users: users });
};
