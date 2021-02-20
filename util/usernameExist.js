const User = require("../modal/user");

module.exports = async username => {
  let exists = await User.findOne({ username });
  if (exists) return true;
  return false;
};
