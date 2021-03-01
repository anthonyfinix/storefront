const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    contact_details: {
      primary_number: { type: Number, require: true },
      secondary_number: Number,
      mobile_number: Number,
      address: {
        full: { type: String, require: true },
        city: { type: String, require: true },
        state: { type: String, require: true },
        coordinates: [Number]
      }
    },
    store_visited: [
      {
        id: { type: mongoose.Types.ObjectId, ref: "Store" },
        name: String
      }
    ],
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true
    },
    created_at: { type: Number, require: true, default: Date.now() }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Store", schema);
