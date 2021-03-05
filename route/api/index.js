const router = require("express").Router();

const productCategory = require("./productCategory");
const supplier = require("./supplier");
const customer = require("./customer");
const purchase = require("./purchase");
const product = require("./product");
const store = require("./store");
const user = require("./user");
const role = require("./role");

router.get("/", (req, res) => res.send("storefront api root"));
router.use("/role", role);
router.use("/user", user);
router.use("/store", store);
router.use("/product", product);
router.use("/purchase", purchase);
router.use("/customer", customer);
router.use("/supplier", supplier);
router.use("/productCategory", productCategory);

module.exports = router;
