const Store = require("./modal");

module.exports = async (req, res) => {
  let { id } = req.query;
  if (!id) return res.json({ error: "Provide store ID" });
  try {
    let store = await Store.deleteOne({ _id: id });
    return res.json({ message: "success", store });
  } catch (e) {
    return res.json({ error: e });
  }
};
