const deleteRole = require("./deleteRole");

module.exports = async (req, res) => {
  let { id } = req.query;
  let { error, message, result } = await deleteRole(id);
  if (error) return res.json({ error });
  return res.json({ message, result });
};
