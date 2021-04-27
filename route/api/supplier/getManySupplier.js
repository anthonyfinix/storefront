const Supplier = require("./modal");

module.exports = async (suppliers = []) => {
  let ids = [];
  suppliers.forEach(supplier => {
    if (supplier._id) ids.push(`${supplier._id}`);
  });
  try {
    let suppliers = await Supplier.find({
      _id: { $in: ids }
    });
    if (suppliers && !(suppliers.length > 0)) {
      return { message: "No result found", result: suppliers };
    }
    return { message: "success", result: suppliers };
  } catch (e) {
    return { error: e.message };
  }
};