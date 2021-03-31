const router = require("express").Router();
const rejectIfNotLoggedIn = require("../../../middleware/rejectIfNotLoggedIn");
const get = require("./controller.get");
const del = require("./controller.delete");
const create = require("./controller.create");

router.get("/", rejectIfNotLoggedIn, get);
router.post("/", rejectIfNotLoggedIn, create);
router.delete("/", rejectIfNotLoggedIn, del);

module.exports = router;
