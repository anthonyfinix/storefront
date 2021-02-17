const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    sku: { type: String, require: true },
    media: [
      {
        name: { type: String, require: true },
        src: { type: String, require: true }
      }
    ],
    category: [
      {
        name: { type: String, require: true },
        id: { type: String, require: true }
      }
    ],
    dimension: {
      height: { type: Number, require: true },
      width: { type: Number, require: true },
      length: { type: Number, require: true }
    },
    manufacturer: { type: String, require: true },
    brand: { type: String, require: true },
    sale_price: { type: String, require: true },
    current_price: { type: String, require: true },
    buying_price: { type: String, require: true },
    stores: [
      {
        name: { type: String, require: true },
        id: { type: String, require: true },
        stock: {
          currentStock: { type: Number, require: true },
          openingStock: { type: Number, require: true },
          closingStock: { type: Number, require: true }
        }
      }
    ],
    suppliers: [
      {
        name: { type: String, require: true },
        id: { type: String, require: true }
      }
    ],
    created_by: { type: String, require: true },
    created_at: { type: Number, require: true, default: Date.now() },
    active: { type: Boolean, require: true, default: true }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Product", schema);
