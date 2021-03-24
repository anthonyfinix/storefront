const router = require("express").Router();
const rejectIfNotLoggedIn = require("../../../middleware/rejectIfNotLoggedIn");
const get = require("./controller.get");
const create = require("./controller.create");
const del = require("./controller.delete");
const count = require("./count");

router.get("/", get);
router.get("/count", count);
router.post("/", create);
router.delete("/", del);

module.exports = router;
