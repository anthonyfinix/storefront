const Product = require("./modal");
module.exports = async ({
  name,
  sku,
  media,
  category,
  dimension,
  manufacturer,
  brand,
  sale_price,
  current_price,
  buying_price,
  stores,
  suppliers,
  active,
  created_at,
  created_by,
}) => {
  try {
    let newProduct = await Product({
      name,
      sku,
      media,
      category,
      dimension,
      manufacturer,
      brand,
      sale_price,
      current_price,
      buying_price,
      stores,
      suppliers,
      created_at,
      created_by,
      active,
    }).save();
    return { result: newProduct };
  } catch (e) {
    return { error: e.message };
  }
};
