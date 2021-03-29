const Product = require("./modal");
const { product_productName, product_id } = require("./joi.product");
module.exports = async ({
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
  // validate id
  if (id) {
    let id_valid = product_id.validate(id);
    if (id_valid.error) return { error: id_valid.error.details };
    params._id = id;
  }
  if (query) params.name = { $regex: new RegExp(`\\w*${query}\\w*`, "g") };
  // validate name
  if (name) {
    let name_valid = product_productName.validate(name);
    if (name_valid.error) return { error: name_valid.error.details };
    params.name = name;
  }
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
    let products = await Product.find(params);
    let count = products.length;
    let message = "success";
    if (count < 0) message = "no products";
    return { result: products, count, message };
  } catch (e) {
    return { error: e.message };
  }
};
