const router = require("express").Router();
const get = require("./controller.get");
const create = require("./controller.create");
const del = require("./controller.delete");
const update = require("./controller.update");

router.get("/", get);
router.post("/", create);
router.delete("/", del);
router.delete("/:id", update);

module.exports = router;
