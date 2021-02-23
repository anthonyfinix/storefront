const mongoose = require("mongoose");
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
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true
    },
    created_at: { type: Number, require: true, defualt: Date.now() }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Employee", schema);
