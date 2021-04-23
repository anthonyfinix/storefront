const Product = require("./modal");
const {
  joi_product_name,
  joi_product_sku,
  joi_product_suppliers,
  joi_product_manufacturer,
  joi_product_brand,
  joi_product_sale_price,
  joi_product_buying_price,
  joi_product_current_price,
  joi_product_stores,
  joi_product_width,
  joi_product_height,
  joi_product_length,
  joi_product_weight,
} = require("./joi.product");
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
}) => {
  let message = "updated ";
  try {
    let product = await Product.findOne({ _id: id });
    if (!product) return { error: "No Product Found" };
    if (name) {
      let nameValidation = joi_product_name.validate(name);
      if (nameValidation.error) return { error: nameValidation.error.details };
      message + "name ";
      product.name = name;
    }
    if (sku) {
      let skuValidation = joi_product_sku.validate(sku);
      if (skuValidation.error) return { error: skuValidation.error.details };
      message + "sku ";
      product.sku = sku;
    }
    if (brand) {
      let brandValidation = joi_product_brand.validate(brand);
      if (brandValidation.error)
        return { error: brandValidation.error.details };
      message + "brand ";
      product.brand = brand;
    }
    if (sale_price) {
      let salePriceValidation = joi_product_sale_price.validate(sale_price);
      if (salePriceValidation.error)
        return { error: salePriceValidation.error.details };
      message + "sales_price ";
      product.sale_price = sale_price;
    }
    if (buying_price) {
      let buyingPriceValidation = joi_product_buying_price.validate(
        buying_price
      );
      if (buyingPriceValidation.error)
        return { error: buyingPriceValidation.error.details };
      message + "buying_price ";
      product.buying_price = buying_price;
    }
    if (current_price) {
      let currentPriceValidation = joi_product_current_price.validate(
        current_price
      );
      if (currentPriceValidation.error)
        return { error: currentPriceValidation.error.details };
      message + "current_price ";
      product.current_price = current_price;
    }
    if (manufacturer) {
      let manufacturerValidation = joi_product_manufacturer.validate(
        manufacturer
      );
      if (manufacturerValidation.error)
        return { error: manufacturerValidation.error.details };
      message + "manufacturing ";
      product.manufacturer = manufacturer;
    }
    if (dimension) {
      if (dimension.length) {
        let lengthValidation = joi_product_length.validate(length);
        if (lengthValidation.error)
          return { error: lengthValidation.error.details };
        message + "length ";
        product.dimension.length = length;
      }
      if (dimension.height) {
        let heightValidation = joi_product_height.validate(height);
        if (heightValidation.error)
          return { error: heightValidation.error.details };
        message + "height ";
        product.dimension.height = height;
      }
      if (dimension.width) {
        let widthValidation = joi_product_width.validate(width);
        if (widthValidation.error)
          return { error: widthValidation.error.details };
        message + "width ";
        product.dimension.width = width;
      }
      if (dimension.weight) {
        let weightValidation = joi_product_weight.validate(weight);
        if (weightValidation.error)
          return { error: weightValidation.error.details };
        message + "weight ";
        product.dimension.weight = weight;
      }
    }
    if (stores) {
      let storesValidation = joi_product_stores.validate(stores);
      if (storesValidation.error) return { error: storesValidation.error.details };
      product.stores = stores;
    }
    if (supplier) {
      let suppliersValidation = joi_product_suppliers.validate(supplier);
      if (suppliersValidation.error) return { error: suppliersValidation.error.details };
      product.suppliers = suppliers;
    }
    try {
      let updatedProduct = await product.save();
      return { result: updatedProduct, message };
    } catch (e) {
      return { error: e.message };
    }
  } catch (e) {
    return { error: e.message };
  }
};
