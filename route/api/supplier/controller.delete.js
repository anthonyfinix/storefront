const Supplier = require("./modal");

module.exports = async (req, res) => {
  let { id } = req.query;
  if (!id) return res.json({ error: "Provide supplier ID" });
  try {
    let supplier = await Supplier.deleteOne({ _id: id });
    return res.json({ message: "Success", supplier });
  } catch (e) {
    return res.json({ error: e });
  }
};
