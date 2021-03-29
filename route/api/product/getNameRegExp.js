const Product = require("./modal");

const getNameRegExp = (query) => {
  return new RegExp(`\\w*${query}\\w*`, "g");
};

module.exports = getNameRegExp;
