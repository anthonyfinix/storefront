const joi = require("joi");

module.exports = joi.object({
  name: String,
  sku: String,
  media: [
    {
      name: String,
      src: String
    }
  ],
  category: [
    {
      name: String,
      id: String
    }
  ],
  dimension: {
    height: Number,
    width: Number,
    length: Number
  },
  manufacturer: String,
  brand: String,
  sale_price: Number,
  selling_price: Number,
  buying_price: Number,
  stores: [
    {
      name: String,
      id: String,
      stock: {
        currentStock: Number,
        openingStock: Number,
        closingStock: Number
      }
    }
  ],
  suppliers: [
    {
      name: String,
      id: String
    }
  ],
  created_by: Number,
  active: Boolean
});
