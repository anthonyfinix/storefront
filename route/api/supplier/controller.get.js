const validation = require("../../../validation/joi.store");
const Supplier = require("./modal");

module.exports = async (req, res) => {
  let supplier = await Supplier.find({});
  if (!supplier.length) return res.json({ error: "No supplier found" });
  return res.json({ message: "success", results: supplier });
};
