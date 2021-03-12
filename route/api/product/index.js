const router = require("express").Router();
const rejectIfNotLoggedIn = require("../../../middleware/rejectIfNotLoggedIn");
const createProduct = require("./controller.create");
const getAllProducts = require("./controller.get");
const updateProduct = require("./controller.update");

router.get("/", rejectIfNotLoggedIn, getAllProducts);
router.post("/",rejectIfNotLoggedIn, createProduct);
router.post("/:id",rejectIfNotLoggedIn, updateProduct);
module.exports = router;
