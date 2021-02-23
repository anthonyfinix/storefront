const router = require("express").Router();
const rejectIfNotLoggedIn = require("../../../middleware/rejectIfNotLoggedIn");
const getAllUsers = require("./service.get");
const addEditUsers = require("./service.create");
const deleteUser = require("./service.delete");

router.get("/", getAllUsers);
router.delete("/", deleteUser);

module.exports = router;
