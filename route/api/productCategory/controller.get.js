const ProductCategory = require("./modal");
const getProductCategory = require("./getProductCategory");
const getNamePartialSearch = require("./getNamePartialSearch");
module.exports = async (req, res) => {
  let { name, id, query } = req.query;
  if (query) {
    let { error, results } = await getNamePartialSearch(query);
    if (error) return res.json({ error });
    return res.json({ message: "success", results });
  }
  let params = {};
  if (id) params.id = id;
  if (name) params.name = name;
  let { error, message, results } = await getProductCategory(params);
  if (error) return res.json({ error });
  return res.json({ message, results });
};