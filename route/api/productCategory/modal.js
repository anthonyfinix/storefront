const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    created_at: { type: Number, required: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model("ProductCategory", schema);
