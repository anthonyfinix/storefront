const mongoose = require("mongoose");
const generic = require("../../../util/generic");
let schema = {
  name: { type: String, required: true, unique: true },
  sku: { type: String, required: true, unique: true },
  media: [
    {
      name: { type: String, required: true },
      src: { type: String, required: true },
    },
  ],
  category: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductCategory",
      required: true,
    },
  },
  dimension: {
    height: { type: Number, required: true },
    width: { type: Number, required: true },
    length: { type: Number, required: true },
    weight: { type: Number, required: true },
  },
  manufacturer: { type: String, required: true },
  brand: { type: String, required: true },
  sale_price: { type: String, required: true },
  current_price: { type: String, required: true },
  buying_price: { type: String, required: true },
  stores: [
    {
      name: { type: String, required: true },
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store",
        required: true,
      },
      stock: {
        currentStock: { type: Number, required: true },
        openingStock: { type: Number },
      },
    },
  ],
  suppliers: [
    {
      company_name: { type: String, required: true },
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",
        required: true,
      },
    },
  ],
  ...generic,
};
schema = new mongoose.Schema(schema, { versionKey: false });
module.exports = mongoose.model("Product", schema);
