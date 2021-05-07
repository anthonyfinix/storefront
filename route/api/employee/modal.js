const mongoose = require("mongoose");
const generic = require("../../../util/generic");
const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Type.ObjectId, ref: "User", require: true },
    store: { type: mongoose.Schema.type.ObjectId, ref: "Store", require: true },
    douments: [
      {
        name: string,
        path: string,
        isVerified: boolean
      }
    ],
    is_verified: true,
    ...generic
  },
  { versionKey: false }
);

module.exports = mongoose.model("Employee", schema);
