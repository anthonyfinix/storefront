const Product = require("./modal");
module.exports = async (req, res) => {
  let count = await Product.countDocuments({});
  return res.json({ message: "success", result: count });
};
