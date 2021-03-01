const User = require("./modal");
module.exports = async username => {
  let result = await User.find({ username });
  let exist = false;
  if (result.length > 0) exist = true;
  return { exist, result };
};
