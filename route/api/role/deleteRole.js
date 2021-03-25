const Role = require("./modal");
module.exports = async (id)=>{
    if (!id) return res.json({ error: "Provide delete ID" });
    try {
        let role = await Role.deleteOne({ _id: id });
        return { message: "success", result:role };
      } catch (e) {
        return { error: e };
      }
}