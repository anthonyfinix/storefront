const getCustomer = require("./getCustomers");
const getNamePartialSearch = require("./getNamePartialSearch");
const filterFields = require('../../util/filterFields');
module.exports = async (req, res) => {
  let {
    query,
    limit,
    skip,
    id,
    name,
    contact_details,
    total_purchase,
    store_visited,
    last_visit,
    active,
    created_by,
    created_at,
    page,
    fields
  } = req.query;
  if (query) {
    let { error, message, result, count } = await getCustomer({
      query,
      skip,
      limit
    });
    if (error) return res.json({ error });
    if (!result.length)
      return res.json({ message: "No Customer Found", result, count, page });
    return res.json({ message, result, count, page});
  }
  let params = { skip, limit };
  if (id) params.id = id;
  if (name) params.name = name;
  // if (store_visited) params.store_visited = store_visited;
  // if (active) params.active = active;
  // if (last_visit) params.last_visit = last_visit;
  // if (created_at) params.created_at = created_at;
  // if (created_by) params.created_by = created_by;
  // if (total_purchase) params.total_purchase = total_purchase;
  // if (contact_details) params.contact_details = contact_details;
  let { error, message, result, count } = await getCustomer(params);
  if (error) return res.json({ error });
  if (fields) result = filterFields({ entity: result, fields });
  return res.json({ message, result, count, page});
};
