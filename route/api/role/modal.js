const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    product: {
      read: { type: Boolean, required: true, default: true },
      write: { type: Boolean, required: true, default: true },
      update: { type: Boolean, required: true, default: true },
      delete: { type: Boolean, required: true, default: true }
    },
    store: {
      read: { type: Boolean, required: true, default: true },
      write: { type: Boolean, required: true, default: true },
      update: { type: Boolean, required: true, default: true },
      delete: { type: Boolean, required: true, default: true }
    },
    user: {
      read: { type: Boolean, required: true, default: true },
      write: { type: Boolean, required: true, default: true },
      update: { type: Boolean, required: true, default: true },
      delete: { type: Boolean, required: true, default: true }
    },
    customer: {
      read: { type: Boolean, required: true, default: true },
      write: { type: Boolean, required: true, default: true },
      update: { type: Boolean, required: true, default: true },
      delete: { type: Boolean, required: true, default: true }
    },
    product: {
      read: { type: Boolean, required: true, default: true },
      write: { type: Boolean, required: true, default: true },
      update: { type: Boolean, required: true, default: true },
      delete: { type: Boolean, required: true, default: true }
    },
    productCategory: {
      read: { type: Boolean, required: true, default: true },
      write: { type: Boolean, required: true, default: true },
      update: { type: Boolean, required: true, default: true },
      delete: { type: Boolean, required: true, default: true }
    },
    supplier: {
      read: { type: Boolean, required: true, default: true },
      write: { type: Boolean, required: true, default: true },
      update: { type: Boolean, required: true, default: true },
      delete: { type: Boolean, required: true, default: true }
    },
    role: {
      read: { type: Boolean, required: true, default: true },
      write: { type: Boolean, required: true, default: true },
      update: { type: Boolean, required: true, default: true },
      delete: { type: Boolean, required: true, default: true }
    },
    created_at: { type: Number, required: true },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Role", schema);
