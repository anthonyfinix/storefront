const router = require("express").Router();
const rejectIfNotLoggedIn = require("../../../middleware/rejectIfNotLoggedIn");
const get = require("./controller.get");
const create = require("./controller.create");
const del = require('./controller.delete');

router.get("/", get);
router.post("/", create);
router.delete("/", del);

module.exports = router;
