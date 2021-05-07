const mongoose = require("mongoose");
const generic = require("../../../util/generic");
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
    roles: [
      {
        name: { type: String, required: true },
        id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Role"
        }
      }
    ],
    gmt: { type: String, required: true },
    currency: { type: String, required: true },
   ...generic
  },
  { versionKey: false }
);

module.exports = mongoose.model("Store", schema);
