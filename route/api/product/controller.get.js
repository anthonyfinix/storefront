const Product = require("./modal");
const getProduct = require("./getProduct");
const getNamePartialSearch = require("./getNamePartialSearch");

module.exports = async (req, res) => {
  let { name, query, id } = req.query;
  if (query && query != "") {
    let { error, results } = await getNamePartialSearch(query);
    if (error) return res.json({ error });
    if (!results.length)
      return res.json({ message: "no products found", results });
    return res.json({ message: "success", results });
  }
  let { result, error } = await getProduct({ name, id });
  if (error) return res.json({ error });
  if (!result.length)
    return res.json({ message: "no products found", results });
  return res.json({ message: "success", result });
};
