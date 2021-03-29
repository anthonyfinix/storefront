const getProduct = require("./getProduct");

module.exports = async (req, res) => {
  let { name, query, id, fields, page, limit, offset } = req.query;
  if (!limit) limit = 10;
  if (!offset) {
    if (!page) offset = 0;
    offset = page * limit;
  }
  if (query && query != "") {
    let { result, error, count, message } = await getProduct({ query,limit,
      offset, });
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
    offset,
  });
  if (error) return res.json({ error });
  return res.json({ message, result, count });
};
