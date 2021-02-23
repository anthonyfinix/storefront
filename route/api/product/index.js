const router = require("express").Router();
const rejectIfNotLoggedIn = require("../../../middleware/rejectIfNotLoggedIn");
const createProduct = require("./service.create");
const getAllProducts = require("./service.get");

router.get("/", rejectIfNotLoggedIn, getAllProducts);
router.post("/",rejectIfNotLoggedIn, createProduct);
module.exports = router;
