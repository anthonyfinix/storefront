const mongoose = require("mongoose");
const generic = require("../../../util/generic");
let schema = {
  company_name: { type: String, required: true, unique: true },
  name: {
    first_name: { type: String, required: true },
    secondary_name: String,
    last_name: String,
  },
  contact_details: {
    primary_number: Number,
    secondary_number: Number,
    mobile_number: Number,
    email: String,
    address: {
      full: { type: String, require: true },
      city: { type: String, require: true },
      state: { type: String, require: true },
      pincode: { type: String, require: true },
      coordinates: [Number],
    },
  },
  total_purchase: { amount: { type: Number, require: true } },
  ...generic,
};
schema = new mongoose.Schema(schema, { versionKey: false });

module.exports = mongoose.model("Supplier", schema);
