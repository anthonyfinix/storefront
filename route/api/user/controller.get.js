const User = require("./modal");

module.exports = async (req, res) => {
  console.log(req.query)
let {page} = req.query
  let users = await User.find({});
  if (!users.length) return res.json({ error: "No User found" });
  return res.json({ message: 'success', users: users, page  });
};
