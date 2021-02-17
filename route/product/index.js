const router = require("express").Router();
const createProduct = require("./createProduct");

router.get("/", (req, res) => {
  // check if logged in
  if (!req.user) return res.send("Not Logged in");

  return res.send("Products");
});
router.post("/", createProduct);

module.exports = router;
