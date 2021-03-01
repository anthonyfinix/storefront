const router = require("express").Router();
const rejectIfNotLoggedIn = require("../../../middleware/rejectIfNotLoggedIn");
const get = require("./controller.get");
const del = require("./controller.delete");

router.get("/", get);
router.delete("/", del);

module.exports = router;
