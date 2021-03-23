const validation = require("./joi.store");
const checkNameExist = require("./checkNameExist");
const createStore = require("./createStore");
module.exports = async (req, res) => {
  let { name, contact_details, roles, gmt, currency, active } = req.body;
  let { error } = validation.validate({
    name,
    contact_details,
    roles,
    gmt,
    currency,
    active
  });
  if (error) return res.json({ error: error.details });
  if (await checkNameExist(name))
    return res.json({ error: "name already exists" });
  let created_at = Date.now();
  let created_by = req.user._id;
  let { e, message, ...data } = await createStore({
    name,
    contact_details,
    roles,
    gmt,
    currency,
    active,
    created_at,
    created_by
  });
  if (e) res.json({ error: e.message });
  return res.json({ message, ...data });
};
0;
