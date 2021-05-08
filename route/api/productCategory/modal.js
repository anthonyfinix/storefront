const mongoose = require("mongoose");
const generic = require("../../../util/generic");
let schema = {
  name: { type: String, required: true },
  ...generic,
};
schema = new mongoose.Schema(schema, { versionKey: false });

module.exports = mongoose.model("ProductCategory", schema);
