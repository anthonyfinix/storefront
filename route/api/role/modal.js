const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    product: {
      read: { type: Boolean, required: true },
      write: { type: Boolean, required: true },
      update: { type: Boolean, required: true },
      delete: { type: Boolean, required: true }
    },
    store: {
      read: { type: Boolean, required: true },
      write: { type: Boolean, required: true },
      update: { type: Boolean, required: true },
      delete: { type: Boolean, required: true }
    },
    user: {
      read: { type: Boolean, required: true },
      write: { type: Boolean, required: true },
      update: { type: Boolean, required: true },
      delete: { type: Boolean, required: true }
    },
    customer: {
      read: { type: Boolean, required: true },
      write: { type: Boolean, required: true },
      update: { type: Boolean, required: true },
      delete: { type: Boolean, required: true }
    },
    product: {
      read: { type: Boolean, required: true },
      write: { type: Boolean, required: true },
      update: { type: Boolean, required: true },
      delete: { type: Boolean, required: true }
    },
    productCategory: {
      read: { type: Boolean, required: true },
      write: { type: Boolean, required: true },
      update: { type: Boolean, required: true },
      delete: { type: Boolean, required: true }
    },
    supplier: {
      read: { type: Boolean, required: true },
      write: { type: Boolean, required: true },
      update: { type: Boolean, required: true },
      delete: { type: Boolean, required: true }
    },
    role: {
      read: { type: Boolean, required: true },
      write: { type: Boolean, required: true },
      update: { type: Boolean, required: true },
      delete: { type: Boolean, required: true }
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
