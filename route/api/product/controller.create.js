const Product = require("./modal");
const validation = require("../../../validation/joi.product");
const checkNameExist = require("../product/checkNameExist");
const checkSKUExist = require("../product/checkSKUExist");
const updateProduct = require("./updateProduct");
const createProduct = require("./createProduct");
const config = require("../../../config");
const getSingleProductCategory = require("../productCategory/getSingleProductCategory");
const getManyStore = require("../store/getManyStore");
const getManySupplier = require("../supplier/getManySupplier");
const mergeStoreWithDBStore = require("./mergeStoreWithDBStore");
const mergeSupplierWithDBSupplier = require('./mergeSupplierWithDBSupplier');
module.exports = async (req, res) => {
  let { user } = req;
  let {
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
    active
  } = req.body;
  if (!active) active = config.default_product_state;
  if (id) {
    let { error: updationError, result } = await updateProduct({
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
      active
    });
    if (updationError) return res.json({ error: updationError });
    return res.json({ message: "success", result });
  }
  let { error } = validation.validate({
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
    active
  });
  if (error) return res.json({ error: error.details });
  let productNameExist = await checkNameExist(name);
  if (productNameExist) return res.json({ error: "Name already exists" });
  let productSKUExist = await checkSKUExist(sku);
  if (productSKUExist) return res.json({ error: "SKU already exists" });
  let singleProductResult = await getSingleProductCategory({
    id: category.id
  });
  if (singleProductResult.error)
    return res.json({ error: "error finding category" });
  if (!singleProductResult.result)
    return res.json({ error: "category does not exist" });
  category.name = singleProductResult.result.name;

  // handle supplier details
  let dbStores = await getManyStore(stores.map(store => ({ _id: store.id })));
  if (dbStores.error)
    return res.json({ error: "there was an error fetching store details" });
  if (dbStores.result && dbStores.result < 0)
    return res.json({ error: "no stores found" });
  stores = mergeStoreWithDBStore(dbStores.result, stores);
  // handle supplier details
  let dbSuppliers = await getManySupplier(
    suppliers.map(supplier => ({ _id: supplier.id }))
  );
  if (dbSuppliers.error)
    return res.json({ error: "there was an error fetching supplier details" });
  if (dbSuppliers.result && dbSuppliers.result < 0)
    return res.json({ error: "no supplier found" });
  suppliers = mergeSupplierWithDBSupplier(dbSuppliers.result, suppliers);

  let created_by = user._id;
  let { error: creationError, result } = await createProduct({
    name,
    sku,
    manufacturer,
    brand,
    sale_price,
    current_price,
    buying_price,
    dimension,
    category,
    created_at: Date.now(),
    created_by,
    active,
    suppliers,
    stores
  });
  if (creationError) return res.json({ error: creationError });
  return res.json({ message: "success", result });
};
