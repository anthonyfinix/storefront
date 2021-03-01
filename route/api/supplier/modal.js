const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    name: {
      first_name: String,
      secondary_name: String,
      last_name: String
    },
    contact_details: {
      primary_number: Number,
      secondary_number: Number,
      mobile_number: Number,
      email: String,
      address: String,
      coordinates: {
        x: Number,
        y: Number
      }
    },
    total_purchase: { amount: { type: Number, require: true } },
    created_at: { type: Number, require: true, default: Date.now() },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true
    },
    active: { type: Boolean, require: true }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Supplier", schema);
