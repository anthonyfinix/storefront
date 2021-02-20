const router = require("express").Router();
const rejectIfNotLoggedIn = require("../../middleware/rejectIfNotLoggedIn");
const createEditProduct = require("./createEditProduct");
const getAllProducts = require("./getAllProducts");

router.get("/", rejectIfNotLoggedIn, getAllProducts);
router.post("/",rejectIfNotLoggedIn, createEditProduct);
module.exports = router;
