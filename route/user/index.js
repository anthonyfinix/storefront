const router = require("express").Router();
const rejectIfNotLoggedIn = require("../../middleware/rejectIfNotLoggedIn");
const getAllUsers = require("./getAllUsers");
const addEditUsers = require("./addEditUsers");
const deleteUser = require("./deleteUser");

router.get("/", rejectIfNotLoggedIn, getAllUsers);
router.post("/", rejectIfNotLoggedIn, addEditUsers);
router.delete("/", rejectIfNotLoggedIn, deleteUser);

module.exports = router;
