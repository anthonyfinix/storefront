const Store = require("./modal");

module.exports = async (stores = []) => {
  let ids = [];
  stores.forEach(store => {
    if (store._id) ids.push(`${store._id}`);
  });
  try {
    let stores = await Store.find({
      _id: { $in: ids }
    });
    if (stores && !(stores.length > 0)) {
      return { message: "No result found", result: stores };
    }
    return { message: "success", result: stores };
  } catch (e) {
    return { error: e.message };
  }
};
