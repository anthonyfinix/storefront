const Customer = require("./modal");

const getNamePartialSearch = async query => {
  try {
    let firstName = query.split(" ")[0];
    let expression = `\\w*${firstName}\\w*`;
    let results = await Customer.find({
      "name.first_name": { $regex: new RegExp(expression, "g") }
    });
    return { results };
  } catch (e) {
    return { error: e.message };
  }
};

module.exports = getNamePartialSearch;
