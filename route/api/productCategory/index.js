const router = require("express").Router();
const get = require("./controller.get");
const create = require("./controller.create");

router.get("/", get);
router.post("/", create);

module.exports = router;
