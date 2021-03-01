const User = require("./modal");
module.exports = async name => {
  let query = {};
  query["name.first_name"] = name.first_name;
  if (name.middle_name) query["name.middle_name"] = name.middle_name;
  if (name.last_name) query["name.last_name"] = name.last_name;
  let result = await User.find(query);
  let exist = false;
  if (result.length > 0) exist = true;
  return { exist, result };
};
