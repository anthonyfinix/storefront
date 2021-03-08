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
  created_by
}) => {
  let params = {};
  if (name && name != "") params.name = name;
  if (sku && sku != "") params.sku = sku;
  if (category) {
    let { name: categoryName, id: categoryId } = category;
    if (categoryName || categoryId) {
      params.category = {};
      categoryName ? (params.category.name = categoryName) : null;
      categoryId ? (params.category.id = categoryId) : null;
    }
  }
  if (dimension) {
    let { length, breath, height } = dimension;
  }
  try {
    // console.log(params)
    let products = await Product.find(params);
    return { products };
  } catch (e) {
    return { error: e.message };
  }
};
