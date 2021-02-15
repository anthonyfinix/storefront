const bcrypt = require("bcrypt");
module.exports = async (password, encryptedPassword) => {
  return await bcrypt.compare(password, encryptedPassword);
};
