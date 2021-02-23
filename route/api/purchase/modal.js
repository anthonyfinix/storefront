const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    product: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    amount: {
      price: Number,
      discount: Number
    },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    created_at: { type: Number, require: true, defualt: Date.now() }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Employee", schema);
