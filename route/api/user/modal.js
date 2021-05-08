const mongoose = require("mongoose");
const config = require("../../../config");
const generic = require("../../../util/generic");

const nameSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  middle_name: { type: String },
  last_name: { type: String, required: true },
});


const contactDetails = new mongoose.Schema({
  primary_number: { type: Number, required: true },
  secondary_number: Number,
  mobile_number: Number,
  email: { type: String, required: true },
  address: {
    full: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: Number, required: true },
    coordinates: [Number],
  },
});

let schema = {
  name: { type: nameSchema, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  contact_details: { type: contactDetails, required: true },
  isVerified: {
    type: Boolean,
    required: true,
    default: config.default_user_verification_state,
  },
  role: String,
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  ...generic,
};


schema = new mongoose.Schema(schema, { versionKey: false });

module.exports = mongoose.model("User", schema);
