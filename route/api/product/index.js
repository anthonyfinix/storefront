const router = require("express").Router();
const rejectIfNotLoggedIn = require("../../../middleware/rejectIfNotLoggedIn");
const createProduct = require("./controller.create");
const getAllProducts = require("./controller.get");

router.get("/", rejectIfNotLoggedIn, getAllProducts);
router.post("/",rejectIfNotLoggedIn, createProduct);
module.exports = router;
