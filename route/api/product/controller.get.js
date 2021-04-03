const getProduct = require("./getProduct");
const filterProducts = require("../../util/filterFields");
const joi_query = require("../../../validation/joi.query");

module.exports = async (req, res) => {
  let { name, query, id, fields, page, limit, skip } = req.query;
  let total = await getProduct({});
  
  if (query) {
    let joi_query_validation = joi_query.validate(query);
    if (joi_query_validation.error)
      return res.json({ error: joi_query_validation.error.details });
    let { result, error, count, message } = await getProduct({
      query,
      limit,
      skip
    });
    if (error) return res.json({ error });
    return res.json({ message, result, count, page, total: total.count });
  }
  if (id) {
    let { result, error, count, message } = await getProduct({ id });
    if (error) return res.json({ error });
    return res.json({ message, result, count, page, total: total.count });
  }
  let { result, error, count, message } = await getProduct({
    name,
    limit,
    skip
  });
  if (error) return res.json({ error });
  if (fields) result = filterProducts({ entity: result, fields });
  return res.json({ message, result, count, page, total: total.count });
};
