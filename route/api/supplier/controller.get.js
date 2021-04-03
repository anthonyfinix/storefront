const getSupplier = require("./getSupplier");
const filterFields = require("../../util/filterFields");

module.exports = async (req, res) => {
  let { query, company_name, id, fields, limit, skip,page } = req.query;
  let { error, result, message, count } = await getSupplier({
    company_name,
    id,
    query,
    limit,
    skip
  });
  if (error) res.json({ error });
  if (fields) result = filterFields({ entity: result, fields });
  return res.json({ message, count, result, page});
};
