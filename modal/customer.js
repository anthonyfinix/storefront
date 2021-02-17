const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    name: {
      first_name: { type: String, require: true },
      secondary_name: { type: String },
      last_name: { type: String }
    },
    contact_details: {
      primary_number: { type: Number, require: true },
      secondary_number: { type: Number },
      mobile_number: { type: Number },
      email: { type: String, require: true },
      address: {
        full: { type: String, require: true },
        city: { type: String, require: true },
        state: { type: String, require: true },
        coordinates: [Number]
      }
    },
    created_by: { type: String, require: true },
    created_at: { type: Number, require: true, defualt: Date.now() },
    last_visit: { type: Number, require: true, defualt: Date.now() },
    total_purchase: { type: Number, require: true },
    active: { type: Boolean, required: true }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Customer", schema);
