const Purchase = require("./modal");
module.exports = async (req, res) => {
  let { page } = req.query;
  let purchases = await Purchase.find({});
  if (!purchases.length) return res.json({ error: "No purchases found" });
  return res.json({ message: "success", results: purchases, page });
};
