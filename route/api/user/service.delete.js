const { User } = require("./modal");

module.exports = async (req, res) => {
  let { userId } = req.query;
  if (!userId) return res.json({ error: "User ID is required" });
  let user = await User.deleteOne({ _id: userId });
  if (!user) return res.json({ error: "User not found" });
  return res.json({ message: "user delete", user: user });
};
