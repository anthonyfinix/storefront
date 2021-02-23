const User = require("./modal");
module.exports = async name => {
  let count = await User.countDocuments({ name });
  return { exist: !!count, count: count };
};
