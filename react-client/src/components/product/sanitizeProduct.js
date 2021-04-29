module.exports = (newProduct) => {
  let product = {};
  if (newProduct.productId) product.id = newProduct.productId;
  product.name = newProduct.productName;
  product.sku = newProduct.productSKU;
  product.category = { id: newProduct.productCategory.id._id };
  product.dimension = newProduct.dimension;
  product.suppliers = newProduct.productSupplier.map((supplier) => ({
    id: supplier.id,
  }));
  product.stores = newProduct.stores.map((store) => ({
    id: store.id,
    stock: store.stock,
  }));
  product.manufacturer = newProduct.productManufacturer;
  product.brand = newProduct.productBrand;
  product.sale_price = newProduct.productSalePrice;
  product.current_price = newProduct.productCurrentPrice;
  product.buying_price = newProduct.productBuyingPrice;
  return product;
};
