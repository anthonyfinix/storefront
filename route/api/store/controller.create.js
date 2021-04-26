const { store } = require("./joi.store");
const checkNameExist = require("./checkNameExist");
const createStore = require("./createStore");
const getManyRoles = require("../role/getManyRoles");
module.exports = async(req, res) => {
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
    if (dbRoles.count <= 0) return res.json({ error: "no roles found" });
    if (dbRoles.error) return res.json({ error: dbRoles.error });
    dbRoles = dbRoles.result;
    let finalRoles = [];
    for (let roleId of roles) {
        let roleExist = false;
        for (let dbRole of dbRoles) {
            if (roleId == dbRole._id) {
                finalRoles.push({ id: roleId, name: dbRole.name });
                roleExist = true;
                break;
            }
        }
        if (!roleExist) return res.json({ error: "no roles found with the provided id" });
    }
    let { e, message, ...data } = await createStore({
        name,
        contact_details,
        roles: finalRoles,
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