const router = require("express").Router();
const rejectIfNotLoggedIn = require("../../middleware/rejectIfNotLoggedIn");
const getAllUsers = require("./getAllUsers");
const addEditUsers = require("./addEditUsers");
const deleteUser = require("./deleteUser");

router.get("/", getAllUsers);
router.delete("/", deleteUser);

module.exports = router;
