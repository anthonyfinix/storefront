const router = require("express").Router();

const productCategory = require("./productCategory");
const supplier = require("./supplier");
const customer = require("./customer");
const product = require("./product");
const store = require("./store");
const user = require("./user");

router.get("/", (req, res) => res.send("storefront api root"));
router.use("/user", user);
router.use("/product", product);
router.use("/customer", customer);
router.use("/store", store);
router.use("/supplier", supplier);
router.use("/productCategory", productCategory);

module.exports = router;
