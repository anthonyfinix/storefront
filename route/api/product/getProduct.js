const Product = require("./modal");
const { joi_product_name, joi_product_id } = require("./joi.product");
module.exports = async ({
  limit,
  skip,
  query,
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
  created_by,
}) => {
  let params = {};
  if (query) params.name = { $regex: new RegExp(`\\w*${query}\\w*`, "g") };
  // if (sku && sku != "") params.sku = sku;
  // if (category) {
  //   let { name: categoryName, id: categoryId } = category;
  //   if (categoryId) params["category.id"] = categoryId;
  //   if (categoryName) params["category.name"] = categoryName;
  // }
  // if (dimension) {
  //   let { length, breath, height } = dimension;
  //   if (length) params.dimension.length = length;
  //   if (breath) params.dimension.breath = breath;
  //   if (height) params.dimension.height = height;
  // }

  try {
    let products = await Product.find(params)
      .sort("+created_at")
      .limit(limit)
      .populate("stores.id")
      .populate("category.id")
      .populate("created_by")
      .populate("suppliers.id")
      .skip(skip)
      .exec();
    let count = products.length;
    let message = "success";
    if (count < 0) message = "no products";
    return { result: products, count, message };
  } catch (e) {
    return { error: e.message };
  }
};
