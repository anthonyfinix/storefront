const getSupplier = require("./getSupplier");
const filterFields = require("../../util/filterFields");

module.exports = async (req, res) => {
  let total = await getSupplier({});
  let { query, company_name, id, fields, limit, skip, page } = req.query;
  // get many
  if (id && id.indexof(",") > -1) {
    let ids = id.split(",");
    return await getManySupplier(ids);
  }
  let { error, result, message, count } = await getSupplier({
    company_name,
    id,
    query,
    limit,
    skip
  });
  if (error) res.json({ error });
  if (fields) result = filterFields({ entity: result, fields });
  return res.json({ message, count, result, page, total: total.count });
};
