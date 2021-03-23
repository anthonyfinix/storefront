const Customer = require("./modal");

const getNamePartialSearch = async query => {
  try {
    let firstName = query.split(" ")[0];
    let expression = `\\w*${firstName}\\w*`;
    let result = await Customer.find({
      "name.first_name": { $regex: new RegExp(expression, "g") }
    });
    let count = result.length;
    let message = "success";
    return { result, count, message };
  } catch (e) {
    return { error: e.message };
  }
};

module.exports = getNamePartialSearch;
