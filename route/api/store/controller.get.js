const validation = require("../../../validation/joi.store");
const Store = require("./modal");

module.exports = async (req, res) => {
  let stores = await Store.find({});
  if (!stores.length) return res.json({ error: "No stores found" });
  return res.json({ message: "success", results: stores });
};
