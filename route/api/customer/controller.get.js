const getCustomer = require("./getCustomers");
const getNamePartialSearch = require("./getNamePartialSearch");

module.exports = async (req, res) => {
  let {
    query,
    name,
    contact_details,
    total_purchase,
    last_visit,
    active,
    created_by,
    created_at
  } = req.query;
  if (query) {
    let { error, message, result } = await getNamePartialSearch(query);
    if (error) return res.json({ error });
    if (!customers.length)
      return res.json({ message: "No Customer Found", result });
    return res.json({ message, result });
  }
  let params = {};
  if (name) params.name = name;
  if (contact_details) params.contact_details = contact_details;
  if (total_purchase) params.total_purchase = total_purchase;
  if (last_visit) params.last_visit = last_visit;
  if (active) params.active = active;
  if (created_at) params.created_at = created_at;
  if (created_by) params.created_by = created_by;
  let { error, message, result } = await getCustomer(params);
  if (error) return res.json({ error });
  if (!result.length)
    return res.json({ message: "No Customer Found", result });
  return res.json({ message, result });
};
