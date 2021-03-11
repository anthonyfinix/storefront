const Product = require("./modal");

const getNamePartialSearch = async query => {
  try {
    let expression = `\\w*${query}\\w*`;
    console.log(expression)
    let results = await Product.find({
      name: { $regex: new RegExp(expression, "g") }
    });
    return { results };
  } catch (e) {
    return { error: e.message };
  }
};

module.exports = getNamePartialSearch;
