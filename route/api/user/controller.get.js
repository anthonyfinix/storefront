const User = require("./modal");

module.exports = async (req, res) => {
  let total = await getUser({});
  console.log(req.query)
let {page} = req.query
  let users = await User.find({});
  if (!users.length) return res.json({ error: "No User found" });
  return res.json({ message: 'success', users: users, page, total:total.count });
};
