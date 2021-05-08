const mongoose = require("mongoose");
const generic = require("../../../util/generic");
let schema = {
  user: { type: mongoose.Schema.Type.ObjectId, ref: "User", require: true },
  store: { type: mongoose.Schema.type.ObjectId, ref: "Store", require: true },
  documents: [
    {
      name: string,
      path: string,
      isVerified: boolean,
    },
  ],
  is_verified: true,
  ...generic,
};
schema = new mongoose.Schema(schema, { versionKey: false });

module.exports = mongoose.model("Employee", schema);
