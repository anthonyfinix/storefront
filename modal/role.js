const schema = new mongoose.Schema({
  role_name: String,
  product: {
    read: { type: Boolean, require: true },
    write: { type: Boolean, require: true },
    update: { type: Boolean, require: true },
    delete: { type: Boolean, require: true }
  },
  store: {
    read: { type: Boolean, require: true },
    write: { type: Boolean, require: true },
    update: { type: Boolean, require: true },
    delete: { type: Boolean, require: true }
  },
  user: {
    read: { type: Boolean, require: true },
    write: { type: Boolean, require: true },
    update: { type: Boolean, require: true },
    delete: { type: Boolean, require: true }
  },
  customer: {
    read: { type: Boolean, require: true },
    write: { type: Boolean, require: true },
    update: { type: Boolean, require: true },
    delete: { type: Boolean, require: true }
  },
  product: {
    read: { type: Boolean, require: true },
    write: { type: Boolean, require: true },
    update: { type: Boolean, require: true },
    delete: { type: Boolean, require: true }
  },
  productCategory: {
    read: { type: Boolean, require: true },
    write: { type: Boolean, require: true },
    update: { type: Boolean, require: true },
    delete: { type: Boolean, require: true }
  },
  supplier: {
    read: { type: Boolean, require: true },
    write: { type: Boolean, require: true },
    update: { type: Boolean, require: true },
    delete: { type: Boolean, require: true }
  },
  created_at: { type: Number, require: true },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
  }
},{ versionKey: false });

module.exports = mongoose.model("Role", schema);
