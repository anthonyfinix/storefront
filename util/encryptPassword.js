const bcrypt = require("bcrypt");
module.exports = async (password, salt) => {
  return await bcrypt.hash(password, salt);
};
