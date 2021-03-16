const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    company_name: { type: String, required: true },
    name: {
      first_name: { type: String, required: true },
      middle_name: { type: String, required: true },
      last_name: { type: String, required: true }
    },
    sku: { type: String, required: true },
    media: [
      {
        name: { type: String, required: true },
        src: { type: String, required: true }
      }
    ],
    category: {
      name: {
        type: String,
        required: true
      },
      id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      }
    },
    dimension: {
      height: { type: Number, required: true },
      width: { type: Number, required: true },
      length: { type: Number, required: true },
      weight: { type: Number, required: true }
    },
    manufacturer: { type: String, required: true },
    brand: { type: String, required: true },
    sale_price: { type: String, required: true },
    current_price: { type: String, required: true },
    buying_price: { type: String, required: true },
    stores: [
      {
        name: { type: String, required: true },
        id: { type: String, required: true },
        stock: {
          currentStock: { type: Number, required: true },
          openingStock: { type: Number, required: true },
          closingStock: { type: Number, required: true }
        }
      }
    ],
    suppliers: [
      {
        name: { type: String, required: true },
        id: { type: String, required: true }
      }
    ],
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    created_at: { type: Number, required: true, default: Date.now() },
    active: { type: Boolean, required: true, default: true }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Product", schema);
