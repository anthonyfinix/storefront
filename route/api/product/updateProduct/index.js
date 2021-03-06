const Product = require("../modal");
const getManyStores = require("../../store/getManyStore");
const getManySupplier = require("../../supplier/getManySupplier");
const getProductCategory = require("../../productCategory/getProductCategory");
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
  joi_product_category,
} = require("../joi.product");
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
  suppliers,
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
        let lengthValidation = joi_product_length.validate(dimension.length);
        if (lengthValidation.error)
          return { error: lengthValidation.error.details };
        message + "length ";
        product.dimension.length = dimension.length;
      }
      if (dimension.height) {
        let heightValidation = joi_product_height.validate(dimension.height);
        if (heightValidation.error)
          return { error: heightValidation.error.details };
        message + "height ";
        product.dimension.height = dimension.height;
      }
      if (dimension.width) {
        let widthValidation = joi_product_width.validate(dimension.width);
        if (widthValidation.error)
          return { error: widthValidation.error.details };
        message + "width ";
        product.dimension.width = dimension.width;
      }
      if (dimension.weight) {
        let weightValidation = joi_product_weight.validate(dimension.weight);
        if (weightValidation.error)
          return { error: weightValidation.error.details };
        message + "weight ";
        product.dimension.weight = dimension.weight;
      }
    }
    if (category) {
      let categoryValidation = joi_product_category.validate(category);
      if (categoryValidation.error)
        return { error: categoryValidation.error.details };
      let productCategoryResult = await getProductCategory({
        id: category.id,
      });
      if (productCategoryResult.error) return { error };
      if (productCategoryResult.count < 0)
        return { error: "product category not found" };
      product.category = {
        id: productCategoryResult.result[0]._id,
        name: productCategoryResult.result[0].name,
      };
    }
    if (stores) {
      let storesValidation = joi_product_stores.validate(stores);
      if (storesValidation.error)
        return { error: storesValidation.error.details };
      let dbStores = await getManyStores(
        stores.map((store) => ({ _id: store.id }))
      );
      if (dbStores.error) return { error: dbStores.error };
      let updatedStores = [];
      for (let store of stores) {
        let storeIdFound = false;
        for (let dbStore of dbStores.result) {
          if (store.id == dbStore._id) {
            updatedStores.push({
              name: dbStore.name,
              id: dbStore._id,
              stock: store.stock,
            });
            storeIdFound = true;
          }
        }
        if (!storeIdFound) return { error: `store id provided not found` };
      }
      product.stores = updatedStores;
    }
    if (suppliers) {
      let suppliersValidation = joi_product_suppliers.validate(suppliers);
      if (suppliersValidation.error)
        return { error: suppliersValidation.error.details };
      let dbSuppliers = await getManySupplier(
        suppliers.map((supplier) => ({ _id: supplier.id }))
      );
      if (dbSuppliers.error) return { error: dbSuppliers.error };
      let updatedSuppliers = [];
      for (let supplier of suppliers) {
        let supplierIdFound = false;
        for (let dbSupplier of dbSuppliers.result) {
          if (supplier.id == dbSupplier._id) {
            updatedSuppliers.push({
              company_name: dbSupplier.company_name,
              id: dbSupplier._id,
            });
            supplierIdFound = true;
          }
        }
        if (!supplierIdFound)
          return { error: `supplier id provided not found` };
      }
      product.suppliers = updatedSuppliers;
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
