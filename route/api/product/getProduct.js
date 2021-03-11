const Product = require("./modal");
module.exports = async ({
  id,
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
  if (id && id != "") params._id = id;
  if (name && name != "") params.name = name;
  if (sku && sku != "") params.sku = sku;
  if (category) {
    let { name: categoryName, id: categoryId } = category;
    if (categoryId) params["category.id"] = categoryId;
    if (categoryName) params["category.name"] = categoryName;
  }
  if (dimension) {
    let { length, breath, height } = dimension;
    if (length) params.dimension.length = length;
    if (breath) params.dimension.breath = breath;
    if (height) params.dimension.height = height;
  }
  try {
    let products = await Product.find(params);
    return { results: products };
  } catch (e) {
    return { error: e.message };
  }
};
