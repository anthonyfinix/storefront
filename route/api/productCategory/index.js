const router = require("express").Router();
const get = require("./controller.get");
const create = require("./controller.create");
const update = require("./controller.update");
const deleteProduct = require("./controller.delete");

router.get("/", get);
router.post("/", create);
router.post("/:id", update);
router.delete("/", deleteProduct);

module.exports = router;
