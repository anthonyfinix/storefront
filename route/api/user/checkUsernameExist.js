const User = require("./modal");
module.exports = async username => {
  let count = await User.countDocuments({ username });
  return { exist: !!count, count: count };
};
