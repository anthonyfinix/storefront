module.exports = (newProduct) => {
  let product = {};
  product.name = newProduct.productName;
  product.sku = newProduct.productSKU;
  product.category = new Object({ id: newProduct.productCategory._id });
  product.dimension = newProduct.dimension;
  product.suppliers = newProduct.productSupplier.map((supplier) => ({
    id: supplier._id,
  }));
  product.stores = newProduct.stores.map((store) => ({
    id: store.id,
    stock:store.stock,
  }));
  product.manufacturer = newProduct.productManufacturer;
  product.brand = newProduct.productBrand;
  product.sale_price = newProduct.productSalePrice;
  product.current_price = newProduct.productCurrentPrice;
  product.buying_price = newProduct.productBuyingPrice;
  return product;
};
