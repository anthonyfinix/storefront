const { store } = require("./joi.store");
const checkNameExist = require("./checkNameExist");
const createStore = require("./createStore");
const getManyRoles = require("../role/getManyRoles");
module.exports = async (req, res) => {
  let { name, contact_details, roles, gmt, currency, active } = req.body;
  let { error } = store.validate({
    name,
    contact_details,
    roles,
    gmt,
    currency,
    active,
  });
  if (error) return res.json({ error: error.details });
  if (await checkNameExist(name))
    return res.json({ error: "name already exists" });
  let created_at = Date.now();
  let created_by = req.user._id;
  let dbRoles = await getManyRoles(roles);
  if (dbRoles.error) return res.json({ error: dbRoles.error });
  dbRoles = dbRoles.result;
  roles = roles.map((roleId,i) => {
    if (roleId == dbRoles[i]._id)
      return {
        id: roleId,
        name: dbRoles[i].name,
      };
  });
  let { e, message, ...data } = await createStore({
    name,
    contact_details,
    roles,
    gmt,
    currency,
    active,
    created_at,
    created_by,
  });
  if (e) res.json({ error: e.message });
  return res.json({ message, ...data });
};
0;
