const deleteUser = require("./deleteUser");

module.exports = async (req, res) => {
  let { userId } = req.query;
  if (!userId) return res.json({ error: "User ID is required" });
  let { error, message, ...data } = await deleteUser(userId);
  if (error) {
    return res.json({ error: error });
  }
  return res.json({ message, ...data });
};
