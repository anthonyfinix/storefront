const router = require("express").Router();
const rejectIfNotLoggedIn = require("../../../middleware/rejectIfNotLoggedIn");
const getAllCustomer = require("./service.get");
const createEditCustomer = require("./service.create");
const deleteCustomer = require('./service.delete');

router.get("/", rejectIfNotLoggedIn, getAllCustomer);
router.post("/", rejectIfNotLoggedIn, createEditCustomer);
router.delete("/", rejectIfNotLoggedIn, deleteCustomer);

module.exports = router;
