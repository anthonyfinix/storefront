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
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User",require:true },
    created_on: Number,
    total_purchase: Number
  },
  { versionKey: false }
);

module.exports = mongoose.model("Supplier", schema);
