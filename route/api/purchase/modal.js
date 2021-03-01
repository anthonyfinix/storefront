const { string } = require("joi");
const mongoose = require("mongoose");
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
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    created_at: { type: Number, required: true, defualt: Date.now() }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Employee", schema);
