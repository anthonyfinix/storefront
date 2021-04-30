const getSupplier = require("./getSupplier");
const filterFields = require("../../util/filterFields");
const getManySupplier = require("./getManySupplier");

module.exports = async (req, res) => {
  let total = await getSupplier({});
  let { query, company_name, id, fields, limit, skip, page } = req.query;
  // get many
  if (id && id.indexOf(",") > -1) {
    let ids = id.split(",").map((id) => ({ _id: id }));
    let { error, result, message, count } = await getManySupplier(ids);
    if (error) res.json(error);
    return res.json({ result, message, count });
  }
  let { error, result, message, count } = await getSupplier({
    company_name,
    id,
    query,
    limit,
    skip,
  });
  if (error) res.json({ error });
  if (fields) result = filterFields({ entity: result, fields });
  return res.json({ message, count, result, page, total: total.count });
};
