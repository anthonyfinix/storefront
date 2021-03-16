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
  supplier,
  created_at,
  created_by,
  active
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
      supplier,
      created_at,
      created_by,
      active
    }).save();
    return { result: newProduct };
  } catch (e) {
    return { error: e.message };
  }
};
