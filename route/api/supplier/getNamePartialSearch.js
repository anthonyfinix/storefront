const Supplier = require("./modal");

const getNamePartialSearch = async query => {
  try {
    let expression = `\\w*${query}\\w*`;
    let result = await Supplier.find({
      company_name: { $regex: new RegExp(expression, "g") }
    });
    let count = result.length;
    let message = count < 0 ? "no supplier found" : "success";
    return { result, count, message };
  } catch (e) {
    return { error: e.message };
  }
};

module.exports = getNamePartialSearch;
