const Role = require("./modal");

module.exports = async (req, res) => {
  let { id } = req.query;
  if (!id) return res.json({ error: "Provide delete ID" });
  try {
    let role = await Role.deleteOne({ _id: id });
    return res.json({ message: "success", role });
  } catch (e) {
    return res.json({ error: e });
  }
};
