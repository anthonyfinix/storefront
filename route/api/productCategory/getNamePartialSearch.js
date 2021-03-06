const ProductCategory = require("./modal");

const getNamePartialSearch = async query => {
  if (query == "") return { error: "query empty" };
  try {
    let expression = `\\w*${query}\\w*`;
    let result = await ProductCategory.find({
      name: { $regex: new RegExp(expression, "g") }
    });
    let message = "success";
    let count = result.length;
    return { message, result, count };
  } catch (e) {
    return { error: e.message };
  }
};

module.exports = getNamePartialSearch;
