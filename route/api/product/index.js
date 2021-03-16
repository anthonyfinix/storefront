const router = require("express").Router();
const rejectIfNotLoggedIn = require("../../../middleware/rejectIfNotLoggedIn");
const create = require("./controller.create");
const get = require("./controller.get");
const updateProduct = require("./controller.update");

router.get("/", rejectIfNotLoggedIn, get);
router.post("/",rejectIfNotLoggedIn, create);
router.post("/:id",rejectIfNotLoggedIn, updateProduct);
module.exports = router;
