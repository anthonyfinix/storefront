const deleteUser = require("./deleteUser");

module.exports = async (req, res) => {
  let { id } = req.query;
  if (!id) return res.json({ error: "User ID is required" });
  let { error, message, ...data } = await deleteUser(id);
  if (error) {
    return res.json({ error: error });
  }
  return res.json({ message, ...data });
};
