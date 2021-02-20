const router = require("express").Router();
const api = require("./api");
const notFound = require("./util/notFound");
const errorHandle = require("./util/errorHandleRoute");
const login = require("./login");
const logout = require("./logout");
const register = require("./register_user");

router.get("/", (req, res) => res.send("store front root (PROVIDE CLIENT UI) "));
router.use("/api", api);
router.post("/login", login);
router.get("/logout", logout);
router.post("/register", register);
router.use(notFound);
router.use(errorHandle);

module.exports = router;
