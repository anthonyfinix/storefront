const mongoose = require("mongoose");
const generic = require("../../../util/generic");

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ...generic
  },
  { versionKey: false }
  
);

module.exports = mongoose.model("ProductCategory", schema);
