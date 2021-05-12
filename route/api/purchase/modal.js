const { string } = require("joi");
const mongoose = require("mongoose");
const generic = require("../../../util/generic");
let schema = {
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      qty: { type: Number, required: true },
    },
  ],
  store: { type: mongoose.Schema.Types.ObjectId, ref: "store" },
  amount: {
    total: { type: Number, required: true },
    discount: Number,
  },
  ...generic,
};
schema = new mongoose.Schema(schema, { versionKey: false });

module.exports = mongoose.model("Purchase", schema);
