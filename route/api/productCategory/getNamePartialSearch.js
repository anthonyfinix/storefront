const ProductCategory = require("./modal");

const getNamePartialSearch = async query => {
  try {
    let expression = `\\w*${query}\\w*`;
    let results = await ProductCategory.find({
      name: { $regex: new RegExp(expression, "g") }
    });
    return { results };
  } catch (e) {
    return { error: e.message };
  }
};

module.exports = getNamePartialSearch;
