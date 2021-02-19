const mongoose = require("mongoose");
const config = require("../config");
const schema = new mongoose.Schema(
  {
    name: {
      first_name: { type: String, require: true },
      middle_name: String,
      last_name: String
    },
    username: { type: String, require: true },
    password: { type: String, require: true },
    contact_details: {
      primary_number: { type: Number, require: true },
      secondary_number: Number,
      mobile_number: Number,
      email: { type: String, require: true },
      address: {
        full: { type: String, require: true },
        city: { type: String, require: true },
        state: { type: String, require: true },
        coordinates: [Number]
      }
    },
    active: { type: Boolean, default: config.default_user_state },
    isVerified: {
      type: Boolean,
      require: true,
      default: config.default_user_verification_state
    },
    isEmployee: { type: Boolean, require: true },
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    created_at: { type: Number, require: true, defualt: Date.now() }
  },
  { versionKey: false }
);

module.exports = mongoose.model("User", schema);
