const { string } = require("joi");
const mongoose = require("mongoose");
const generic = require("../../../util/generic");
const schema = new mongoose.Schema(
  {
    customer: {
      name: { type: String, required: true },
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
      }
    },
    product: [
      {
        name: { type: String, required: true },
        product_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true
        }
      }
    ],
    store: {
      name: { type: String, required: true },
      id: { type: mongoose.Schema.Types.ObjectId, ref: "store" }
    },
    amount: {
      price: { type: Number, required: true },
      discount: Number
    },
    ...generic
   
  },
  { versionKey: false }
);

module.exports = mongoose.model("Employee", schema);
