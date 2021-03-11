const Supplier = require("./modal");
const getNamePartialSearch = require("./getNamePartialSearch");
const getSupplier = require("./getSupplier");

module.exports = async (req, res) => {
  let { query, company_name, id } = req.query;
  if (query) {
    let { error, results } = await getNamePartialSearch(query);
    if (error) res.json({ error: error });
    return res.json({ results });
  }
  let { error, results } = await getSupplier({ company_name, id });
  if (!results.length) return res.json({ error: "No supplier found", results });
  return res.json({ message: "success", results });
};
