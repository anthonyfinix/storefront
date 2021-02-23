const Role = require("./modal");
module.exports = async (req, res) => {
  let roles = await Role.find({});
  res.json({ message: "success", results: roles });
};
