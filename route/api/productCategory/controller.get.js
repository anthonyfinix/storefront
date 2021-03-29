const getProductCategory = require("./getProductCategory");
const getNamePartialSearch = require("./getNamePartialSearch");
const filterFields = require("../../util/filterFields");
module.exports = async (req, res) => {
  let params = {};
  let { name, id, query, limit, skip, page, fields } = req.query;
  if (query) {
    let { error, result, count, message } = await getProductCategory(
      query,
      limit,
      skip,
      page
    );
    if (error) return res.json({ error });
    return res.json({ message, result, count });
  }
  if (id) {
    let { error, result, count, message } = await getProductCategory({ id });
    if (error) return res.json({ error });
    return res.json({ message, result, count });
  }
  if (name) {
    params.name = name;
  }
  let { error, message, result, count } = await getProductCategory({
    params,
    limit,
    skip,
    page,
  });
  if (error) return res.json({ error });
  if (fields) result = filterFields({ entity: result, fields });
  return res.json({ message, result, count });
};
