const router = require("express").Router();
const rejectIfNotLoggedIn = require("../../middleware/rejectIfNotLoggedIn");
const getAllCustomer = require("./getAllCustomer");
const createEditCustomer = require("./createEditCustomer");
const deleteCustomer = require('./deleteCustomer');

router.get("/", rejectIfNotLoggedIn, getAllCustomer);
router.post("/", rejectIfNotLoggedIn, createEditCustomer);
router.delete("/", rejectIfNotLoggedIn, deleteCustomer);

module.exports = router;
