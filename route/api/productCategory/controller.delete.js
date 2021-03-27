const ProductCategory = require("./modal");

module.exports = async (req, res) => {
  let { id } = req.query;
  if (!id) return res.json({ error: "Provide productCategory ID" });
  try {
    let productCategory = await ProductCategory.deleteOne({ _id: id });
    return res.json({ message: "success", productCategory });
  } catch (e) {
    return res.json({ error: e });
  }
};
