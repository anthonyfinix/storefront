const router = require("express").Router();
const get = require("./controller.get");
const create = require("./controller.create");
const rejectIfNotLoggedIn = require('../../../middleware/rejectIfNotLoggedIn');

router.get("/",rejectIfNotLoggedIn, get);
router.post("/",rejectIfNotLoggedIn, create);

module.exports = router;
