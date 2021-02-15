const router = require("express").Router();
const getAllUsers = require("./getAllUsers");
const addEditUsers = require("./addEditUsers");


router.get("/", getAllUsers);
router.post("/", addEditUsers);
router.delete("/", (req, res) => {
  res.send("User");
});

module.exports = router;
