const Customer = require("./modal");

module.exports = async (req, res) => {
  let { id } = req.query;
  if (!id) return res.json({ error: "Provide Customer ID" });
  try {
    let customer = await Customer.deleteOne({ _id: id });
    return res.json({ message: "Success", customer });
  } catch (e) {
    return res.json({ error: e });
  }
};
