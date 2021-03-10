const ProductCategory = require("./modal");
const getProductCategory = require("./getProductCategory");
module.exports = async (req, res) => {
  let { name, id } = req.query;
  let { error, message, results } = await getProductCategory({ name, id });
  if (error) return res.json({ error });
  return res.json({ message, results });
};
