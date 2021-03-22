const Product = require("./modal");

module.exports = async (req, res) => {
  let { id } = req.query;
  if (!id) return res.json({ error: "Provide Product ID" });
  try {
    let product = await Product.deleteOne({ _id: id });
    return res.json({ message: "success", product });
  } catch (e) {
    return res.json({ error: e });
  }
};
