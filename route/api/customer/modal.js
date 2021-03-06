const { ref } = require("joi");
const mongoose = require("mongoose");
const generic = require("../../../util/generic");
let schema = {
  name: {
    first_name: { type: String, require: true },
    secondary_name: { type: String },
    last_name: { type: String },
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
      coordinates: [Number],
    },
  },
  store_visited: [{ type: mongoose.Schema.Types.ObjectId, ref: "Store" }],
  last_visit: { type: Number, require: true, default: Date.now() },
  total_purchase: { amount: { type: Number, require: true } },
  ...generic,
};
schema = new mongoose.Schema(schema, { versionKey: false });
module.exports = mongoose.model("Customer", schema);
