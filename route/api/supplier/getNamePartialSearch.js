const Supplier = require("./modal");

const getNamePartialSearch = async query => {
  try {
    let expression = `\\w*${query}\\w*`;
    console.log(expression);
    let results = await Supplier.find({
      company_name: { $regex: new RegExp(expression, "g") }
    });
    return { results };
  } catch (e) {
    return { error: e.message };
  }
};

module.exports = getNamePartialSearch;
