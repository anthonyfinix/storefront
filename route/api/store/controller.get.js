const validation = require("./joi.store");
const getStoreNameSearch = require("./getNamePartialSearch");
const filterFields = require("../../util/filterFields");
const getStore = require("./getStores");
module.exports = async (req, res) => {
  let {
    id,
    name,
    contact_details,
    roles,
    gmt,
    currency,
    created_at,
    query,
    limit,
    skip,
    fields
  } = req.query;
  if (query) {
    let nameSearchResult = await getStoreNameSearch(query);
    if (nameSearchResult.error)
      return res.json({ error: nameSearchResult.error });
    return res.json({
      message: nameSearchResult.message,
      result: nameSearchResult.result,
      count: nameSearchResult.count
    });
  }
  let params = { limit, skip };
  if (id) params.id = id;
  if (name) params.name = name;
  // if (contact_details) params.contact_details = contact_details;
  // if (roles) params.roles = roles;
  // if (gmt) params.gmt = gmt;
  // if (currency) params.currency = currency;
  // if (created_at) params.created_at = created_at;
  let { error, result, message, count } = await getStore(params);
  if (fields) result = filterFields({ entity: result, fields });
  if (error) return res.json({ error });
  return res.json({ message, result, count });
};
