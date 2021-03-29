const getProduct = require("./getProduct");
const filterProducts = require("./filterProducts");
const joi_skip = require("../../../validation/joi.skip");
const joi_page = require("../../../validation/joi.page");
const joi_limit = require("../../../validation/joi.limit");
const joi_query = require("../../../validation/joi.query");

module.exports = async (req, res) => {
  let { name, query, id, fields, page, limit, skip } = req.query;
  // validate page
  if (page) {
    let joi_page_validation = joi_page.validate(page);
    if (joi_page_validation.error)
      return res.json({ error: joi_page_validation.error });
  }
  // validate limit
  if (limit) {
    let joi_limit_validation = joi_limit.validate(limit);
    if (joi_limit_validation.error)
      return res.json({ error: joi_limit_validation.error });
  }
  // validate skip
  if (skip) {
    let joi_skip_validation = joi_skip.validate(skip);
    if (joi_skip_validation.error)
      return res.json({ error: joi_skip_validation.error });
  }
  if (!skip) {
    if (!page) skip = 0;
    skip = page * limit;
  }
  if (query) {
    let joi_query_validation = joi_query.validate(query);
    if (joi_query_validation.error)
      res.json({ error: joi_query_validation.error.details });
    let { result, error, count, message } = await getProduct({
      query,
      limit,
      skip,
    });
    if (error) return res.json({ error });
    return res.json({ message, result, count });
  }
  if (id) {
    let { result, error, count, message } = await getProduct({ id });
    if (error) return res.json({ error });
    return res.json({ message, result, count });
  }
  let { result, error, count, message } = await getProduct({
    name,
    limit,
    skip,
  });
  if (error) return res.json({ error });
  if (fields) {
    result = filterProducts({ products: result, fields });
  }
  return res.json({ message, result, count, page });
};
