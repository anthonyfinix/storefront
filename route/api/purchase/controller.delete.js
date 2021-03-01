const Purchase = require("./modal");

module.exports = async (req, res) => {
  let { id } = req.query;
  if (!id) return res.json({ error: "Provide purchase ID" });
  try {
    let purchase = await Purchase.deleteOne({ _id: id });
    return res.json({ message: "Success", result: purchase });
  } catch (e) {
    return res.json({ error: e });
  }
};
