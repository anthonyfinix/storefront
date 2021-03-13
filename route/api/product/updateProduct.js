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
  let message = "updated ";
  try {
    let product = await Product.findOne({ _id:id });
    if (!product) return { error: "No Product Found" };
    if (sku) {
      message + "sku ";
      product.sku = sku;
    }
    if (name) {
      message + "name ";
      product.name = name;
    }
    if (brand) {
      message + "brand ";
      product.brand = brand;
    }
    if (sale_price) {
      message + "sales_price ";
      product.sale_price = sale_price;
    }
    if (buying_price) {
      message + "buying_price ";
      product.buying_price = buying_price;
    }
    if (current_price) {
      message + "current_price ";
      product.current_price = current_price;
    }
    if (manufacturer) {
      message + "manufacturing ";
      product.manufacturer = manufacturer;
    }
    if (dimension) {
      if (dimension.length) {
        message + "length ";
        product.dimension.length = length;
      }
      if (dimension.height) {
        message + "height ";
        product.dimension.height = height;
      }
      if (dimension.width) {
        message + "width ";
        product.dimension.width = width;
      }
      if (dimension.weight) {
        message + "weight ";
        product.dimension.weight = weight;
      }
    }
    try {
      let updatedProduct = await product.save();
      return { result: updatedProduct,message };
    } catch (e) {
      return { error: e.message };
    }
  } catch (e) {
    return { error: e.message };
  }
};