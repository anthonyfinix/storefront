const Product = require("./modal");
const getProduct = require("./getProduct");
const getNamePartialSearch = require("./getNamePartialSearch");

module.exports = async (req, res) => {
  let { name, query, id } = req.query;
  if (query && query != "") {
    let { error, result, count, message } = await getNamePartialSearch(query);
    if (error) return res.json({ error });
    return res.json({ message, result, count });
  }
  let { result, error, count, message } = await getProduct({ name, id });
  console.log(result)
  if (error) return res.json({ error });
  return res.json({ message, result, count });
};
