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
  supplier
}) => {
  try {
    let product = await Product.findOne({ id });
    if (!product) return { error: "No Product Found" };
    if (sku) product.sku = sku;
    if (name) product.name = name;
    if (brand) product.brand = brand;
    if (sale_price) product.sale_price = sale_price;
    if (buying_price) product.buying_price = buying_price;
    if (manufacturer) product.manufacturer = manufacturer;
    if (current_price) product.current_price = current_price;
    if (dimension) {
      if (dimension.length) product.dimension.length = length;
      if (dimension.height) product.dimension.height = height;
      if (dimension.width) product.dimension.width = width;
      if (dimension.weight) product.dimension.weight = weight;
    }
    try {
      let updatedProduct = await product.save();
      return { result: updatedProduct };
    } catch (e) {
      return { error: e.message };
    }
  } catch (e) {
    return { error: e.message };
  }
};
