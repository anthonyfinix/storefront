const Product = require("./modal");
const getProduct = require("./getProduct");
const getNamePartialSearch = require("./getNamePartialSearch");

module.exports = async (req, res) => {
  let { name, query } = req.query;
  if (query && query != "") {
    let { error, results } = await getNamePartialSearch(query);
    if (error) return res.json({ error });
    if (!results.length)
      return res.json({ message: "no products found", results });
    return res.json({ message: "success", results });
  }
  let { results, error } = await getProduct({ name });
  if (error) return res.json({ error });
  if (!results.length)
    return res.json({ message: "no products found", results });
  return res.json({ message: "success", results });
};
