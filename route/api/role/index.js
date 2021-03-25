const router = require("express").Router();
const get = require("./controller.get");
const create = require("./controller.create");
const deleteRole = require("./controller.delete");
const rejectIfNotLoggedIn = require("../../../middleware/rejectIfNotLoggedIn");

router.get("/", rejectIfNotLoggedIn, get);
router.post("/", rejectIfNotLoggedIn, create);
router.delete("/", rejectIfNotLoggedIn, deleteRole);

module.exports = router;
