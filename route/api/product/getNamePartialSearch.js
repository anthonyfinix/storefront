const Product = require("./modal");

const getNamePartialSearch = async query => {
  if (query == "") return { error: "query empty" };
  try {
    let expression = `\\w*${query}\\w*`;
    let result = await Product.find({
      name: { $regex: new RegExp(expression, "g") }
    });
    let message = "success";
    let count = results.length;
    return { result, count, message };
  } catch (e) {
    return { error: e.message };
  }
};

module.exports = getNamePartialSearch;
