const Store = require("./modal");

const getNamePartialSearch = async query => {
  try {
    if(query === "") return {error:"empty search query"}
    let expression = `\\w*${query}\\w*`;
    let result = await Store.find({
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
