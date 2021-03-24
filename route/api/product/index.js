const router = require("express").Router();
const rejectIfNotLoggedIn = require("../../../middleware/rejectIfNotLoggedIn");
const create = require("./controller.create");
const get = require("./controller.get");
const updateProduct = require("./controller.update");
const deleteProduct = require("./controller.delete");
const count = require("./count");

router.get("/", rejectIfNotLoggedIn, get);
router.post("/", rejectIfNotLoggedIn, create);
router.post("/count",count)
router.post("/:id", rejectIfNotLoggedIn, updateProduct);
router.delete("/", rejectIfNotLoggedIn, deleteProduct);
module.exports = router;
