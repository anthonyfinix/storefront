const router = require("express").Router();
const create = require("./controller.create");
const get = require("./controller.get");
const update = require("./controller.update");

router.get("/", get);
router.post("/", create);
router.post("/:id", update);
module.exports = router;
