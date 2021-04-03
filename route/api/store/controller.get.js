const validation = require("./joi.store");
const getStoreNameSearch = require("./getNamePartialSearch");
const filterFields = require("../../util/filterFields");
const getStore = require("./getStores");
module.exports = async (req, res) => {
  let total = await getStore({});
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
    fields,
    page
  } = req.query;
  if (query) {
    let { error, result, message, count } = await getStore({ query });
    if (error) return res.json({ error });
    if (fields) result = filterFields({ entity: result, fields });
    return res.json({ message, result, count, page, total:total.count });
  }
  let params = { limit, skip };
  if (id) params.id = id;
  if (name) params.name = name;
  // if (contact_details) params.contact_details = contact_details;
  // if (roles) params.roles = roles;
  // if (gmt) params.gmt = gmt;
  // if (currency) params.currency = currency;
  // if (created_at) params.created_at = created_at;
  let  { error, result, message, count } = await getStore(params);
  if (error) return res.json({ error });
  if (fields) result = filterFields({ entity: result, fields });
  return res.json({ message, result, count, page,total:total.count});
};
