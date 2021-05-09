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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    }, 
  ],
  store: {
    name: { type: String, required: true },
    id: { type: mongoose.Schema.Types.ObjectId, ref: "store" },
  },
  amount: {
    price: { type: Number, required: true },
    discount: Number,
  },
  ...generic,
};
schema = new mongoose.Schema(schema, { versionKey: false });

module.exports = mongoose.model("Employee", schema);
