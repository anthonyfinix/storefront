const Store = require("./modal");
module.exports = async company_name => {
  let count = await Store.countDocuments({ company_name });
  return count;
};
