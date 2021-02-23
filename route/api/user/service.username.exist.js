const User = require("./modal");

module.exports = async username => {
  let exists = await User.findOne({ username });
  if (exists) return true;
  return false;
};
