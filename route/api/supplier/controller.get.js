const Supplier = require("./modal");
const getNamePartialSearch = require("./getNamePartialSearch");
const getSupplier = require("./getSupplier");

module.exports = async (req, res) => {
  let { query, company_name, id } = req.query;
  if (query) {
    let { error, result, message, count } = await getNamePartialSearch(query);
    if (error) res.json({ error: error });
    return res.json({ result, message, count });
  }
  let { error, result, message, count } = await getSupplier({ company_name, id });
  if (error) res.json({ error });
  return res.json({ message,count, result });
};
