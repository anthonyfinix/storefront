const filterFields = require("../../util/filterFields");
const getRole = require("./getRole");
const Role = require("./modal");
module.exports = async (req, res) => {
  let total = await getRole({});
  let { name, id, query, limit, skip, page, fields } = req.query;
  let params = {};
  if (query) {
    let { error, result, count, message } = await getRole({
      query,
      limit,
      skip,
      page
    });
    if (error) return res.json({ error });
    return res.json({ message, result, count, page, total:total.count });
  }
  if (id) {
    let { error, result, count, message } = await getRole({ id });
    if (error) return res.json({ error });
    return res.json({ message, result, count, page,total:total.count });
  }
  if (name) {
    params.name = name;
  }
  let { error, message, result, count } = await getRole({
    ...params,
    limit,
    skip,
    page
  });
  if (error) return res.json({ error });
  if (fields) result = filterFields({ entity: result, fields });
  return res.json({ message, result, count, page,total:total.count });
};
